package com.pablovisuals.portfolio.service;

import com.mongodb.client.result.DeleteResult;
import com.pablovisuals.portfolio.dto.*;
import com.pablovisuals.portfolio.exception.AlreadyExistsException;
import com.pablovisuals.portfolio.exception.NotFoundException;
import com.pablovisuals.portfolio.model.Comment;
import com.pablovisuals.portfolio.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.*;
import org.springframework.data.mongodb.core.query.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final MongoTemplate mongoTemplate;

    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    public List<Comment> getLatestApprovedComments(int limit) {
        Query query = new Query();
        query.addCriteria(Criteria.where("approved").is(true))
                .with(Sort.by(Sort.Direction.DESC, "createdAt"))
                .limit(limit);

        return mongoTemplate.find(query, Comment.class);
    }

    public Comment saveComment(CommentInput comment) {
        try {
            return commentRepository.save(
                    Comment.builder()
                            .approved(false)
                            .author(comment.author())
                            .message(comment.message())
                            .createdAt(LocalDateTime.now())
                            .build());
        } catch (DuplicateKeyException e) {
            throw new AlreadyExistsException("Comment with exact same author (" + comment.author()
                    + ") and message (`" + comment.message() + "`) already exists");
        }

    }

    public Comment updateComment(CommentUpdateInput comment) {
        if (comment.message() == null && comment.author() == null) {
            throw new IllegalArgumentException("When updating comment at least one of comment fields must not be null");
        }

        Query query = new Query(Criteria.where("id").is(comment.id()));
        Update update = new Update();

        Optional.ofNullable(comment.message()).ifPresent(msg -> update.set("message", msg));
        Optional.ofNullable(comment.author()).ifPresent(auth -> update.set("author", auth));

        Comment updated = mongoTemplate.findAndModify(
                query,
                update,
                FindAndModifyOptions.options().returnNew(true),
                Comment.class);

        return Optional.ofNullable(updated).orElseThrow(() -> new NotFoundException("Comment", comment.id()));
    }

    public boolean deleteCommentById(String id) {
        Query query = new Query(Criteria.where("id").is(id));
        DeleteResult result = mongoTemplate.remove(query, Comment.class);
        if (result.getDeletedCount() == 0) {
            throw new NotFoundException("Comment", id);
        } else {
            return true;
        }
    }

    public boolean bulkUpdateCommentsApprovedStatus(List<CommentUpdateApprovedStatusInput> comments) {
        BulkOperations bulkOps = mongoTemplate.bulkOps(BulkOperations.BulkMode.UNORDERED, Comment.class);

        for (CommentUpdateApprovedStatusInput input : comments) {
            Query query = new Query(Criteria.where("_id").is(input.id()));

            if(mongoTemplate.exists(query, Comment.class)){
                Update update = new Update().set("approved", input.approved());
                bulkOps.updateOne(query, update);
            }else{
                throw new NotFoundException("Comment", input.id());
            }
        }

        bulkOps.execute();
        return true;
    }
}

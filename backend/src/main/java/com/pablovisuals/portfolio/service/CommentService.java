package com.pablovisuals.portfolio.service;

import com.mongodb.client.result.DeleteResult;
import com.pablovisuals.portfolio.dto.CommentInput;
import com.pablovisuals.portfolio.dto.CommentUpdateInput;
import com.pablovisuals.portfolio.exception.CommentAlreadyExistsException;
import com.pablovisuals.portfolio.exception.CommentNotFoundException;
import com.pablovisuals.portfolio.model.Comment;
import com.pablovisuals.portfolio.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;

import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
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

    public List<Comment> getApprovedComments(boolean approved) {
        return commentRepository.findAllByApproved(approved);
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
            throw new CommentAlreadyExistsException("Comment with exact same author (" + comment.author()
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

        return mongoTemplate.findAndModify(
                query,
                update,
                FindAndModifyOptions.options().returnNew(true),
                Comment.class);
    }

    public boolean deleteCommentById(String id) {
        Query query = new Query(Criteria.where("id").is(id));
        DeleteResult result = mongoTemplate.remove(query, Comment.class);
        if (result.getDeletedCount() == 0) {
            throw new CommentNotFoundException("Comment with id: " + id + " not found");
        } else {
            return true;
        }
    }
}

package com.pablovisuals.portfolio.service;

import com.pablovisuals.portfolio.dto.CommentInput;
import com.pablovisuals.portfolio.model.Comment;
import com.pablovisuals.portfolio.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;

    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    public List<Comment> getApprovedComments(boolean approved) {
        return commentRepository.findAllByApproved(approved);
    }

    public Comment saveComment(CommentInput comment) {
        return commentRepository.save(
                Comment.builder()
                .approved(false)
                .author(comment.author())
                .message(comment.message())
                .createdAt(LocalDateTime.now())
                .build());
    }
}

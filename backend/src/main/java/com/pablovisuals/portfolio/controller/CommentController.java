package com.pablovisuals.portfolio.controller;

import com.pablovisuals.portfolio.dto.*;
import com.pablovisuals.portfolio.model.Comment;
import com.pablovisuals.portfolio.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @QueryMapping
    public List<Comment> approvedComments(@Argument int limit) {
        return commentService.getLatestApprovedComments(limit);
    }

    @QueryMapping
    @PreAuthorize("isAuthenticated()")
    public List<Comment> comments() {
        return commentService.getAllComments();
    }


    @MutationMapping
    public Comment createComment(@Argument CommentInput comment) {
        return commentService.saveComment(comment);
    }

    @MutationMapping
    public Comment updateComment(@Argument CommentUpdateInput comment) {
        return commentService.updateComment(comment);
    }

    @MutationMapping
    @PreAuthorize("isAuthenticated()")
    public Boolean updateCommentsApprovedStatus(@Argument List<CommentUpdateApprovedStatusInput> comments) {
        return commentService.bulkUpdateCommentsApprovedStatus(comments);
    }

    @MutationMapping
    @PreAuthorize("isAuthenticated()")
    public boolean deleteComment(@Argument String commentId) {
        return commentService.deleteCommentById(commentId);
    }
}

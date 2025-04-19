package com.pablovisuals.portfolio.controller;

import com.pablovisuals.portfolio.dto.CommentInput;
import com.pablovisuals.portfolio.model.Comment;
import com.pablovisuals.portfolio.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @QueryMapping
    public List<Comment> comments() {
        return commentService.getAllComments();
    }

    @QueryMapping
    public List<Comment> commentsByApproved(@Argument boolean approved){
        return commentService.getApprovedComments(approved);
    }

    @MutationMapping
    public Comment addComment(@Argument CommentInput comment){
        return commentService.saveComment(comment);
    }
}

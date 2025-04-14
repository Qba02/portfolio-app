package com.pablovisuals.portfolio.controller;

import com.pablovisuals.portfolio.model.Comment;
import com.pablovisuals.portfolio.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/comments")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;
    @GetMapping
    public List<Comment> getAllComments() {
        return commentService.getAllComments();
    }
}

package com.pablovisuals.portfolio.service;

import com.pablovisuals.portfolio.model.Comment;
import com.pablovisuals.portfolio.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;

    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }
}

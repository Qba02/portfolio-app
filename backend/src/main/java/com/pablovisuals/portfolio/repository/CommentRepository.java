package com.pablovisuals.portfolio.repository;

import com.pablovisuals.portfolio.model.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends MongoRepository<Comment, String> {
    List<Comment> findAllByApproved(boolean approved);
}
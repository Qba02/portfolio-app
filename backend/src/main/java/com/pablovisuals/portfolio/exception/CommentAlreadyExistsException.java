package com.pablovisuals.portfolio.exception;

public class CommentAlreadyExistsException extends RuntimeException{
    public CommentAlreadyExistsException(String message) {
        super(message);
    }
}

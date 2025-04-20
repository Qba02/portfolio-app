package com.pablovisuals.portfolio.exception;

public class UserEmailAlreadyExistsException extends RuntimeException{
    public UserEmailAlreadyExistsException(String message) {
        super(message);
    }
}

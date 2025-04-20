package com.pablovisuals.portfolio.exception;

public class NotFoundException extends RuntimeException {
    public NotFoundException(String entity, String id) {
        super(entity + " with id " + id + " not found. ");
    }

    public NotFoundException(String entity, String id, String customMessage) {
        super(entity + " with id " + id + " not found. " + customMessage);
    }

    public NotFoundException(String message) {
        super(message);
    }
}
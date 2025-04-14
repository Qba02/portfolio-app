package com.pablovisuals.portfolio.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Data
@Document(collection = "comments")
public class Comment {
    @Id
    private String id;

    private String author;
    private String message;
    private Instant createdAt;
    private boolean approved;
}

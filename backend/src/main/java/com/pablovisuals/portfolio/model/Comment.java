package com.pablovisuals.portfolio.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@CompoundIndex(name = "unique_author_message", def = "{'author': 1, 'message': 1}", unique = true)
@Document(collection = "comments")
public class Comment {
    @Id
    private String id;
    private String author;
    private String message;
    @Indexed(name = "created_at_ttl", expireAfter = "P365d", direction = IndexDirection.DESCENDING)
    private LocalDateTime createdAt;
    private boolean approved;
}

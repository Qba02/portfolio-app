package com.pablovisuals.portfolio.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.CompoundIndex;
import org.springframework.data.mongodb.core.index.CompoundIndexes;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@CompoundIndexes({
        @CompoundIndex(name = "unique_author_name_idx", def = "{'author': 1, 'message': 1}", unique = true),
        @CompoundIndex(name = "created_at_idx", def = "{'createdAt': -1}")
})

@Document(collection = "comments")
public class Comment {
    @Id
    private String id;
    private String author;
    private String message;
    @Indexed(name = "createdAt_ttl", expireAfter = "P365d")
    private LocalDateTime createdAt;
    private boolean approved;
}

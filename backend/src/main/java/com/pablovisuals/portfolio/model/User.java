package com.pablovisuals.portfolio.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "users")
public class User {

    @Id
    private String id;
    private String username;
    @Indexed(name = "unique_email", unique = true)
    private String email;
    private String password;
    private LocalDateTime createdAt;
    private Role role;
}
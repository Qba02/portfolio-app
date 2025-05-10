package com.pablovisuals.portfolio.dto;

import lombok.*;

import java.time.LocalDateTime;
@Data
@Builder
@AllArgsConstructor
public class UserAuthResponse{
    private String token, id, username, email;
    private LocalDateTime createdAt;
}


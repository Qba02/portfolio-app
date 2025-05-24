package com.pablovisuals.portfolio.controller;

import com.pablovisuals.portfolio.dto.ContactInput;
import com.pablovisuals.portfolio.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class EmailController {

    private final EmailService emailService;

    @MutationMapping
    public boolean sendContactInfo(@Argument ContactInput contactInput) {
        return emailService.sendContactEmail(contactInput);
    }

}

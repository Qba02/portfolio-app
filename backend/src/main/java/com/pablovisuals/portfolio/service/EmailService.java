package com.pablovisuals.portfolio.service;

import com.pablovisuals.portfolio.dto.ContactInput;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    @Value("${spring.mail.username}")
    private String receiverEmail;
    private final JavaMailSender mailSender;

    public boolean sendContactEmail(ContactInput input) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(receiverEmail);
        message.setFrom(receiverEmail);
        message.setSubject("PabloVisuals - wiadomość od \"" + input.name() + "\"");
        message.setText(
                input.message() + "\n\n" + input.name() + "\n" + input.email()
        );

        mailSender.send(message);
        return true;
    }
}

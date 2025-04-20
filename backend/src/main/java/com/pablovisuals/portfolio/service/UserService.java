package com.pablovisuals.portfolio.service;

import com.mongodb.client.result.DeleteResult;
import com.pablovisuals.portfolio.dto.UserInput;
import com.pablovisuals.portfolio.dto.UserUpdateInput;
import com.pablovisuals.portfolio.exception.AlreadyExistsException;
import com.pablovisuals.portfolio.exception.NotFoundException;
import com.pablovisuals.portfolio.model.Role;
import com.pablovisuals.portfolio.model.User;
import com.pablovisuals.portfolio.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final MongoTemplate mongoTemplate;

    public User saveUser(UserInput user) {
        try {
            return userRepository.save(
                    User.builder()
                            .username(user.username())
                            .email(user.email())
                            .password(user.password())
                            .role(Collections.singleton(Role.ADMIN))
                            .createdAt(LocalDateTime.now())
                            .build());

        } catch (DuplicateKeyException e) {
            throw new AlreadyExistsException("User with email: " + user.email() + " already exists");
        }
    }

    public User updateUser(UserUpdateInput user) {
        if (user.username() == null && user.email() == null && user.password() == null) {
            throw new IllegalArgumentException("When updating user credentials " +
                    "at least one of user fields must not be null");
        }

        Query query = new Query(Criteria.where("id").is(user.id()));
        Update update = new Update();

        Optional.ofNullable(user.username()).ifPresent(name -> update.set("username", name));
        Optional.ofNullable(user.email()).ifPresent(email -> update.set("email", email));
        Optional.ofNullable(user.password()).ifPresent(pass -> update.set("password", pass));

        return mongoTemplate.findAndModify(
                query,
                update,
                FindAndModifyOptions.options().returnNew(true),
                User.class);
    }

    public boolean deleteUserById(String id) {
        Query query = new Query(Criteria.where("id").is(id));
        DeleteResult result = mongoTemplate.remove(query, User.class);
        if (result.getDeletedCount() == 0) {
            throw new NotFoundException("User", id);
        } else {
            return true;
        }
    }

}

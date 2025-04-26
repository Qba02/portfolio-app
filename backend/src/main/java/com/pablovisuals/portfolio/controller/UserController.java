package com.pablovisuals.portfolio.controller;

import com.pablovisuals.portfolio.dto.UserInput;
import com.pablovisuals.portfolio.dto.UserUpdateInput;
import com.pablovisuals.portfolio.model.User;
import com.pablovisuals.portfolio.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @MutationMapping
    public User registerUser(@Argument UserInput user){
        return userService.saveUser(user);
    }

    @MutationMapping
    public User updateUser(@Argument UserUpdateInput user){
        return userService.updateUser(user);
    }

    @MutationMapping
    public boolean deleteUser(@Argument String userId){
        return userService.deleteUserById(userId);
    }
}

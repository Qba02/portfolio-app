package com.pablovisuals.portfolio.service;

import com.pablovisuals.portfolio.model.UserPrincipal;
import com.pablovisuals.portfolio.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return new UserPrincipal(
                userRepository.findByEmail(email)
                        .orElseThrow(() -> new UsernameNotFoundException("User with email not found"))
        );
    }
}

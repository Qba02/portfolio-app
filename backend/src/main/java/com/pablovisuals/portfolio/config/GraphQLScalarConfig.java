package com.pablovisuals.portfolio.config;

import com.pablovisuals.portfolio.utils.conversters.LocalDateTimeScalar;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.graphql.execution.RuntimeWiringConfigurer;

@Configuration
public class GraphQLScalarConfig {

    @Bean
    public RuntimeWiringConfigurer runtimeWiringConfigurer() {
        return wiringBuilder -> wiringBuilder.scalar(LocalDateTimeScalar.createLocalDateTimeScalar());
    }
}

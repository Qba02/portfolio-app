package com.pablovisuals.portfolio.config;

import graphql.scalars.ExtendedScalars;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import graphql.schema.GraphQLScalarType;

@Configuration
public class GraphqlScalarConfig {

    @Bean
    public GraphQLScalarType dateScalar() {
        return ExtendedScalars.DateTime;
    }
}

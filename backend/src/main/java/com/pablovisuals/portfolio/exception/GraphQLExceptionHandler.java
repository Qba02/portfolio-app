package com.pablovisuals.portfolio.exception;

import graphql.*;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.graphql.execution.DataFetcherExceptionResolverAdapter;
import org.springframework.graphql.execution.ErrorType;
import org.springframework.lang.NonNull;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.stereotype.Component;

@Component
public class GraphQLExceptionHandler extends DataFetcherExceptionResolverAdapter {

    private enum CustomErrorType implements ErrorClassification {
        ALREADY_EXISTS,
    }

    @Override
    @NonNull
    protected GraphQLError resolveToSingleError(Throwable ex, @NonNull DataFetchingEnvironment env) {
        switch (ex) {
            case NotFoundException ignored -> {
                return toGraphQLError(ex, env, ErrorType.NOT_FOUND);
            }
            case AlreadyExistsException ignored -> {
                return toGraphQLError(ex, env, CustomErrorType.ALREADY_EXISTS);
            }
            case IllegalArgumentException ignored -> {
                return toGraphQLError(ex, env, ErrorType.BAD_REQUEST);
            }
            case AccessDeniedException ignored -> {
                return toGraphQLError(ex, env, ErrorType.FORBIDDEN);
            }
            case BadCredentialsException ignored -> {
                return toGraphQLError(ex, env, ErrorType.UNAUTHORIZED);
            }
            default -> {
                return GraphqlErrorBuilder.newError(env)
                        .message("Unexpected error occurred")
                        .errorType(ErrorType.INTERNAL_ERROR)
                        .build();
            }
        }
    }

    private GraphQLError toGraphQLError(Throwable ex, DataFetchingEnvironment env, ErrorClassification errorType) {
        return GraphqlErrorBuilder.newError()
                .errorType(errorType)
                .message(ex.getMessage())
                .path(env.getExecutionStepInfo().getPath())
                .location(env.getField().getSourceLocation())
                .build();
    }
}

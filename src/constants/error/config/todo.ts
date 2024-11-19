import { HttpStatus } from '@nestjs/common';
import { ErrorConfig } from '../error.types';
import { TODO_ERROR } from '../errors/todo';

export const todoErrorConfig: ErrorConfig<TODO_ERROR> = {
    [TODO_ERROR.TODO_NOT_EXIST]: {
        message: 'Todo not exist',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'TODO_NOT_EXIST_ERROR',
    },
    [TODO_ERROR.TODO_ALREADY_EXISTS]: {
        message: 'Todo already exists with this name',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'TITLE_ALREADY_EXIST_ERROR',
    },
};

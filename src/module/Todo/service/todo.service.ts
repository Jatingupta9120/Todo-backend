import { Injectable } from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from '../dto/todo.dto';
import { TodoRepository } from '../repository/todo.repository';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { PRODUCT_ERROR, TODO_ERROR } from 'src/constants/error';
import { ProjectRepository } from 'src/module/product/repository/product.repository';

@Injectable()
export class TodoService {
    constructor(
        private readonly todoRepository: TodoRepository,
        private projectRepository: ProjectRepository,
    ) {}
    async createTodo(createTodoDto: CreateTodoDto) {
        const project = await this.projectRepository.getProductById(
            createTodoDto.projectId,
        );
        if (!project) {
            throw new HttpExceptionWrapper(PRODUCT_ERROR.PRODUCT_NOT_EXISTS);
        }
        const todo = await this.todoRepository.createTodo(createTodoDto);
        return todo.toJSON();
    }

    async getTodosById(id: string) {
        const todo = await this.todoRepository.getTodoById(id);
        if (!todo) {
            throw new HttpExceptionWrapper(TODO_ERROR.TODO_NOT_EXIST);
        }
        return { todo };
    }

    async getAllTodos() {
        const todos = await this.todoRepository.getAllTodos();
        return todos;
    }

    async deleteTodo(id: string) {
        const todo = await this.todoRepository.getTodoById(id);
        if (!todo) {
            throw new HttpExceptionWrapper(TODO_ERROR.TODO_NOT_EXIST);
        }

        await this.todoRepository.deleteTodo(id);
    }

    async updateTodo(updatedTodoDto: UpdateTodoDto, id: string) {
        const existingTodo = await this.todoRepository.getTodoById(id);
        if (!existingTodo) {
            throw new HttpExceptionWrapper(TODO_ERROR.TODO_NOT_EXIST);
        }

        const updatedTodo = await this.todoRepository.updateTodo(
            id,
            updatedTodoDto,
        );
        return updatedTodo[0];
    }
}

import { Injectable } from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from '../dto/todo.dto';
import { TodoEntity } from '../entity/todo.entity';

@Injectable()
export class TodoRepository {
    async getTodoById(id: string) {
        return await TodoEntity.findByPk(id);
    }

    async getAllTodos() {
        return await TodoEntity.findAndCountAll();
    }

    async createTodo(createTodoDTO: CreateTodoDto): Promise<TodoEntity> {
        return await TodoEntity.create(createTodoDTO);
    }

    async updateTodo(id: string, itemInfo: UpdateTodoDto) {
        return await TodoEntity.update(itemInfo, {
            where: { id },
        });
    }

    async deleteTodo(id: string): Promise<string> {
        await TodoEntity.destroy({
            where: { id },
        });
        return 'Deleted Product Details successfully';
    }
}

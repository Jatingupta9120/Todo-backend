import { Module } from '@nestjs/common';
import { TodoRepository } from './repository/todo.repository';
import { TodoService } from './service/todo.service';
import { TodoController } from './controller/todo.controller';
import { ProjectModule } from '../product/product.module';

@Module({
    imports: [ProjectModule],
    controllers: [TodoController],
    providers: [TodoRepository, TodoService],
    exports: [TodoRepository, TodoService],
})
export class TodoModule {}

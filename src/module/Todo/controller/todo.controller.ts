import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { TodoService } from '../service/todo.service';

import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';
// import { GetTodoPathParams } from 'src/module/product/dto/product.dto';
import {
    CreateTodoDto,
    GetTodoPathParams,
    UpdateTodoDto,
} from '../dto/todo.dto';

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Post()
    async createProduct(@Body() createTodoDto: CreateTodoDto) {
        return await this.todoService.createTodo(createTodoDto);
    }

    @Get()
    @ResponseCustom(responseName.GET_ALL_POSTS)
    async getAllTodos() {
        return await this.todoService.getAllTodos();
    }

    @Get(':id')
    @ResponseCustom(responseName.GET_POST)
    async getTodosById(@Param() params: GetTodoPathParams) {
        return await this.todoService.getTodosById(params.id);
    }

    @Delete(':id')
    @ResponseCustom(responseName.PRODUCT_DELETED)
    async deleteTodo(@Param() { id }: GetTodoPathParams) {
        return await this.todoService.deleteTodo(id);
    }

    @Put(':id')
    @ResponseCustom(responseName.PRODUCT_UPDATED)
    async updateTodo(
        @Body() itemInfo: UpdateTodoDto,
        @Param() { id }: GetTodoPathParams,
    ) {
        return await this.todoService.updateTodo(itemInfo, id);
    }
}

import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../dto/create_user.dto';
import { UserEntity } from '../entity/user.entity';
import { ProjectEntity } from 'src/module/product/entity/product.entity';
import { TodoEntity } from 'src/module/Todo/entity/todo.entity';

@Injectable()
export class UserRepository {
    async create(createUserDTO: CreateUserDTO) {
        return await UserEntity.create(createUserDTO);
    }

    async getAll() {
        return await UserEntity.findAndCountAll();
    }

    async getById(userId: string) {
        return UserEntity.findByPk(userId, {
            include: [
                {
                    model: ProjectEntity,
                    attributes: { exclude: ['userId'] },
                    include: [
                        {
                            model: TodoEntity,
                            attributes: { exclude: ['projectId'] },
                        },
                    ],
                },
            ],
        });
    }

    async getUserDetailsById(userId: string) {
        const user = await UserEntity.findOne({
            where: { id: userId },
        });
        return user !== null;
    }

    async getByUserName(username: string) {
        return UserEntity.findOne({
            where: { username: username },
        });
    }

    async getByEmail(email: string) {
        return await UserEntity.findOne({
            where: { email },
        });
    }
}

import { Injectable } from '@nestjs/common';
import { CreateProjectDTO, UpdateProjectDTO } from '../dto/product.dto';
import { ProjectEntity } from '../entity/product.entity';
import { TodoEntity } from 'src/module/Todo/entity/todo.entity';

@Injectable()
export class ProjectRepository {
    async getProductById(id: string) {
        return await ProjectEntity.findByPk(id, {
            include: [
                {
                    model: TodoEntity,
                    attributes: { exclude: ['projectId'] },
                },
            ],
        });
    }

    async getAllProduct() {
        return await ProjectEntity.findAndCountAll();
    }

    async createProduct(
        createProductDTO: CreateProjectDTO,
    ): Promise<ProjectEntity> {
        return await ProjectEntity.create(createProductDTO);
    }

    async updateProduct(id: string, itemInfo: UpdateProjectDTO) {
        return await ProjectEntity.update(itemInfo, {
            where: { id },
        });
    }

    async deleteProduct(id: string): Promise<string> {
        await ProjectEntity.destroy({
            where: { id },
        });
        return 'Deleted Product Details successfully';
    }
}

import { Injectable } from '@nestjs/common';
import { PRODUCT_ERROR, USER_ERROR } from 'src/constants/error';
import { UserRepository } from 'src/module/user/repository/user.repository';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { CreateProjectDTO, UpdateProjectDTO } from '../dto/product.dto';
import { ProjectRepository } from '../repository/product.repository';

@Injectable()
export class ProjectService {
    constructor(
        private projectRepository: ProjectRepository,
        private userRepository: UserRepository,
    ) {}

    async createProduct(createProductDTO: CreateProjectDTO) {
        const user = await this.userRepository.getUserDetailsById(
            createProductDTO.userId,
        );
        if (!user) {
            throw new HttpExceptionWrapper(USER_ERROR.USER_NOT_EXIST);
        }
        const product = await this.projectRepository.createProduct(
            createProductDTO,
        );
        return product.toJSON();
    }

    async getAllProducts() {
        const product = await this.projectRepository.getAllProduct();
        return product;
    }

    async getProductById(id: string) {
        const product = await this.projectRepository.getProductById(id);
        if (!product) {
            throw new HttpExceptionWrapper(PRODUCT_ERROR.PRODUCT_NOT_EXISTS);
        }
        return { product };
    }

    async updateProduct(updateItemDto: UpdateProjectDTO, id: string) {
        const existingItem = await this.projectRepository.getProductById(id);
        if (!existingItem) {
            throw new HttpExceptionWrapper(PRODUCT_ERROR.PRODUCT_NOT_EXISTS);
        }

        const updatedItem = await this.projectRepository.updateProduct(
            id,
            updateItemDto,
        );
        return updatedItem[0];
    }

    async deleteItem(id: string): Promise<void> {
        const existingItem = await this.projectRepository.getProductById(id);
        if (!existingItem) {
            throw new HttpExceptionWrapper(PRODUCT_ERROR.PRODUCT_NOT_EXISTS);
        }

        await this.projectRepository.deleteProduct(id);
    }
}

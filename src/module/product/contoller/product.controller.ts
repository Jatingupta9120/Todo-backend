import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';

import { responseName } from 'src/constants/response';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
// Ensure proper naming here
import { GetUserPathParams } from 'src/module/user/dto/create_user.dto';
import { ProjectService } from '../service/product.service';
import {
    CreateProjectDTO,
    GetProjectPathParams,
    UpdateProjectDTO,
} from '../dto/product.dto';

@Controller('projects') // Specify the base path for the project routes
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}

    @Post()
    async createProject(
        @Body() createProjectDto: CreateProjectDTO, // Ensure correct param interface
    ) {
        return await this.projectService.createProduct(createProjectDto);
    }

    @Get()
    @ResponseCustom(responseName.GET_ALL_POSTS) // Ensure correct response name
    async getAllProjects() {
        return await this.projectService.getAllProducts();
    }

    @Get(':id')
    @ResponseCustom(responseName.GET_POST)
    async getProjectById(@Param() { id }: GetProjectPathParams) {
        return await this.projectService.getProductById(id);
    }

    @Delete(':id')
    @ResponseCustom(responseName.PRODUCT_DELETED)
    async deleteProject(@Param() { id }: GetProjectPathParams) {
        return await this.projectService.deleteItem(id);
    }

    @Put(':id')
    @ResponseCustom(responseName.PRODUCT_UPDATED)
    async updateProject(
        @Body() updateProjectDto: UpdateProjectDTO,
        @Param() { id }: GetProjectPathParams,
    ) {
        return await this.projectService.updateProduct(updateProjectDto, id);
    }
}

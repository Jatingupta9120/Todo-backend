import { Module } from '@nestjs/common';
import { UserRepository } from '../user/repository/user.repository';
import { UserModule } from '../user/user.module';
import { ProjectController } from './contoller/product.controller';
import { ProjectService } from './service/product.service';
import { ProjectRepository } from './repository/product.repository';

@Module({
    imports: [UserModule],
    controllers: [ProjectController],
    providers: [ProjectService, ProjectRepository, UserRepository],
    exports: [ProjectService, ProjectRepository],
})
export class ProjectModule {}

import { DynamicModule, Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AuthModule } from 'src/module/auth/auth.module';
import { ProjectModule } from 'src/module/product/product.module';
import { TodoModule } from 'src/module/Todo/todo.module';
import { UserModule } from 'src/module/user/user.module';

const dynamicModule = [
    {
        path: 'users',
        module: UserModule,
    },
    {
        path: 'product',
        module: ProjectModule,
    },
    {
        path: 'auth',
        module: AuthModule,
    },
    {
        path: 'todo',
        module: TodoModule,
    },
];

@Module({})
export class AppRouterModule {
    static register(): DynamicModule {
        return {
            module: AppRouterModule,
            imports: [
                ...dynamicModule.map((item) => item.module),
                RouterModule.register(dynamicModule),
            ],
        };
    }
}

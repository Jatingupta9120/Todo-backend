import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Sequelize } from 'sequelize-typescript';

import { UserEntity } from 'src/module/user/entity/user.entity';

import { Logger } from 'winston';
import { DatabaseService } from './database.service';
import { ProjectEntity } from 'src/module/product/entity/product.entity';
import { TodoEntity } from 'src/module/Todo/entity/todo.entity';
// import { ProductEntity } from 'src/module/product/entity/product.entity';

export const databaseProvider = [
    {
        provide: 'SEQUELIZE',
        inject: [WINSTON_MODULE_PROVIDER, ConfigService, DatabaseService],
        useFactory: async (
            logger: Logger,
            configService: ConfigService,
            databaseService: DatabaseService,
        ) => {
            const sequelize = new Sequelize(
                configService.get('database.postgres.databaseName')!,
                configService.get('database.postgres.username')!,
                configService.get('database.postgres.password')!,
                {
                    host: configService.get('database.postgres.host')!,
                    port: configService.get('database.postgres.port')!,
                    dialect: configService.get('database.postgres.dialect')!,
                },
            );

            // Add table modules here...
            sequelize.addModels([UserEntity, ProjectEntity, TodoEntity]);

            // Sync database with module
            const isAlterTable = configService.get(
                'database.postgres.alterTable',
            )!;
            await sequelize.sync({ alter: isAlterTable });
            try {
                await sequelize.authenticate({});

                logger.info('Database connected successfully', {
                    database: sequelize.config.database,
                    username: sequelize.config.username,
                    host: sequelize.config.host,
                    port: sequelize.config.port,
                });

                // Seeding data
                await databaseService.seedingData();
            } catch (error) {
                logger.error(error);
            }
            return sequelize;
        },
    },
];

import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table,
} from 'sequelize-typescript';
import { TodoEntity } from 'src/module/Todo/entity/todo.entity';
import { UserEntity } from 'src/module/user/entity/user.entity';

@Table({ tableName: 'project' })
export class ProjectEntity extends Model<ProjectEntity> {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
    })
    id: string;

    @Column({
        allowNull: false,
        type: DataType.UUID,
    })
    @ForeignKey(() => UserEntity)
    userId: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    title: string;

    @HasMany(() => TodoEntity)
    todos: TodoEntity[];

    @BelongsTo(() => UserEntity)
    user: UserEntity;
}

import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from 'sequelize-typescript';
import { ProjectEntity } from 'src/module/product/entity/product.entity';

@Table({ tableName: 'todo' })
export class TodoEntity extends Model<TodoEntity> {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
    })
    id: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    description: string;

    @Column({
        allowNull: true,
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    status: boolean;

    @Column({
        allowNull: false,
        type: DataType.UUID,
    })
    @ForeignKey(() => ProjectEntity)
    projectId: string;

    @BelongsTo(() => ProjectEntity)
    project: ProjectEntity;
}

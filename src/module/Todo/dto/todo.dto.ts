import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
    @IsString()
    @IsNotEmpty()
    projectId: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsBoolean()
    @IsOptional()
    status?: boolean;
}

export class UpdateTodoDto {
    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    status?: boolean;
}

export class GetTodoPathParams {
    @IsString()
    id: string;
}

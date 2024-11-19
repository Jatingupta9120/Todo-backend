import {
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
    Length,
} from 'class-validator';
export class ProjectDTO {
    @IsNotEmpty()
    @IsString()
    @Length(3, 255, { message: 'Title must be between 3 and 255 characters' })
    title: string;
}

export class CreateProjectDTO extends ProjectDTO {
    @IsString()
    @IsNotEmpty()
    userId: string;
}

export class UpdateProjectDTO {
    @IsString()
    @IsOptional()
    title?: string;
}

export class GetProjectPathParams {
    @IsNotEmpty()
    @IsUUID(4)
    id: string;
}

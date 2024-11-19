import { OmitType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsEmail,
    IsEmpty,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
    MinLength,
} from 'class-validator';
import { Role } from '../entity/user.entity';

export class UserDTO {
    @IsNotEmpty()
    @IsUUID(4)
    id: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    @Type(() => Date)
    birthDate?: Date;

    @IsEmpty()
    role?: Role;
}

export class CreateUserDTO extends OmitType(UserDTO, ['id'] as const) {}
export class UpdateUserDTO extends OmitType(CreateUserDTO, [
    'password',
    'username',
]) {}

export class GetUserPathParams {
    @IsNotEmpty()
    @IsUUID(4)
    id: string;
}

export class LoginCredentialsDTO {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    userName: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string;
}

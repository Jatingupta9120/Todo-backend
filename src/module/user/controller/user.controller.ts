import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { userresponseName } from 'src/constants/response/user/user_response.constants';
import { responseName } from '../../../constants/response';
import { Response as ResponseCustom } from '../../../utils/response/response.decorator';
import { CreateUserDTO, GetUserPathParams } from '../dto/create_user.dto';
import { UserRepository } from '../repository/user.repository';
import { UserService } from '../service/user.service';
@Controller()
export class UserController {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private userRepository: UserRepository,
    ) {}

    @Post('signUp')
    @ResponseCustom(userresponseName.USER_CREATED)
    async createUser(@Body() createUserDTO: CreateUserDTO) {
        try {
            return await this.userService.createUser(createUserDTO);
        } catch (error) {
            throw new Error('Unable to create user: username must be unique');
        }
    }

    @Get()
    @ResponseCustom(userresponseName.GET_ALL_USER)
    async getAllUser() {
        return await this.userService.getAllUser();
    }

    @Get('/:id')
    @ResponseCustom(responseName.GET_USER)
    async getUserById(@Param() { id }: GetUserPathParams) {
        return await this.userService.getUserById(id);
    }
}

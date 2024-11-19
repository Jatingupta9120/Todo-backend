import { ProjectEntity } from 'src/module/product/entity/product.entity';

export interface User {
    fullname: string;
    email: string;
    username: string;
    password: string;
    birthdate: Date;
    products: ProjectEntity[];
}
export interface login {
    username: string;
    password: string;
}

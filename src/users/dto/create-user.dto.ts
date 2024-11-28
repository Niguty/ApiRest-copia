import { Role } from "../autorizacao/role.enum";

export class CreateUserDto {
    name: string;
    email: string;
    password: string;
    decks: [string];
    roles: Role[];
}

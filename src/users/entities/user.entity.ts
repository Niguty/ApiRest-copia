import { Role } from "../autorizacao/role.enum";

export class User {
    id: number;
    name: string;
    email: string;
    senha: string;
    decks: [string];
    roles: Role[];
}

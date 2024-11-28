import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/service/users.service';


@Injectable()
export class AuthService {
    constructor(
        private UsersService: UsersService,
        private jwtService: JwtService
    ) {}

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.UsersService.findById(username);
        if (user?.senha !== pass) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.name};
        return {
            access_token: await this.jwtService.signAsync(payload),
        }
    }
}

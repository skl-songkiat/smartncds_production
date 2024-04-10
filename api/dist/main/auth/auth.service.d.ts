import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../user/user.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(username: string, password: string): Promise<any>;
}

import { UsersService } from "./user.service";
import { User } from "./user.entity";
import { UserDto } from "./dto/user.dto";
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getUserAll(): Promise<User[]>;
    createUser(createUser: UserDto): Promise<any>;
    findOne(user: UserDto): Promise<User | null>;
    updateUser(updateUser: UserDto): Promise<any>;
    resetPasswordUser(User: UserDto): Promise<any>;
    updateToggleUser(User: UserDto): Promise<any>;
    removeUser(removeUser: UserDto): Promise<any>;
    removeSelectUser(User: UserDto[]): Promise<any>;
}

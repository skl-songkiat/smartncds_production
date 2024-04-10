import { UserDto } from './dto/user.dto';
import { DataSource, Repository } from "typeorm";
import { User } from "./user.entity";
export declare class UsersService {
    private usersRepository;
    private dataSource;
    constructor(usersRepository: Repository<User>, dataSource: DataSource);
    findAll(): Promise<any>;
    findOne(user_uuid: string): Promise<User | null>;
    findByUsername(username: string): Promise<User | null>;
    create(createUserDto: UserDto): Promise<any>;
    update(updateUserDto: UserDto): Promise<any>;
    updateToggle(UserDto: UserDto): Promise<any>;
    remove(UserDto: UserDto): Promise<any>;
    removeWithSelect(removeUserDtoArray: UserDto[]): Promise<any>;
    private make_temp_password;
    resetpassword(UserDto: UserDto): Promise<any>;
    resetpasswordByUser(UserDto: UserDto): Promise<any>;
}

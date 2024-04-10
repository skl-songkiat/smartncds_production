"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const bcrypt = require("bcryptjs");
const uuid_1 = require("uuid");
let UsersService = class UsersService {
    constructor(usersRepository, dataSource) {
        this.usersRepository = usersRepository;
        this.dataSource = dataSource;
    }
    async findAll() {
        const user = await this.dataSource
            .getRepository(user_entity_1.User)
            .createQueryBuilder("user")
            .where("user.recycle = :recycle", {
            recycle: false,
        })
            .getMany();
        return user;
    }
    async findOne(user_uuid) {
        const user = await this.dataSource
            .getRepository(user_entity_1.User)
            .createQueryBuilder("user")
            .where("user.user_uuid = :user_uuid", {
            user_uuid: user_uuid,
        })
            .getOne();
        return user;
    }
    async findByUsername(username) {
        const user = await this.dataSource
            .getRepository(user_entity_1.User)
            .createQueryBuilder("user")
            .where("user.username = :username", {
            username: username,
        })
            .getOne();
        console.log(username);
        return user;
    }
    async create(createUserDto) {
        const id = (0, uuid_1.v4)();
        console.log("create", createUserDto);
        const password_temp = this.make_temp_password(8);
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password_temp, salt);
        const isPasswordMatching = await bcrypt.compare(password_temp, hash);
        if (!isPasswordMatching) {
            console.log("not equal");
        }
        else {
            console.log("equal");
        }
        const response = await this.usersRepository
            .save({
            user_uuid: id,
            username: createUserDto.username,
            password: hash,
            salt: salt,
            firstname: createUserDto.firstname,
            lastname: createUserDto.lastname,
            email: createUserDto.email,
            avatar: createUserDto.avatar,
            create_by: createUserDto.whois,
        })
            .then((response) => {
            return response;
        })
            .catch((error) => {
            console.log(error);
            return error;
        });
        console.log(response);
        if (response.errno === 1062) {
            return response;
        }
        else {
            return {
                result: response,
                temp: password_temp,
                code: "200",
                message: "create company success",
            };
        }
    }
    async update(updateUserDto) {
        console.log(updateUserDto);
        const user_uuid = updateUserDto.user_uuid;
        console.log("user_uuid", user_uuid);
        const user = await this.usersRepository.findOneBy({ user_uuid });
        console.log("user", user);
        if (user === null) {
            return {
                result: [],
                code: "304",
                message: "user not exist",
            };
        }
        const userEntity = new user_entity_1.User();
        userEntity.user_uuid = user_uuid;
        userEntity.firstname = updateUserDto.firstname;
        userEntity.lastname = updateUserDto.lastname;
        userEntity.username = updateUserDto.username;
        userEntity.email = updateUserDto.email;
        userEntity.update_by = updateUserDto.whois;
        const response = await this.dataSource
            .createQueryBuilder()
            .update(user_entity_1.User)
            .set(userEntity)
            .where("user_uuid = :user_uuid", { user_uuid: user.user_uuid })
            .execute();
        console.log("update user", response);
        if (response.affected === 1) {
            return {
                result: response,
                code: "201",
                message: "user update success yay!",
            };
        }
        else {
            return {
                result: response,
                code: "80002",
                message: "user update un-successfully!!!",
            };
        }
    }
    async updateToggle(UserDto) {
        const user_uuid = UserDto.user_uuid;
        const update_by = UserDto.whois;
        const isActice = UserDto.isActive;
        const user = await this.usersRepository.findOneBy({
            user_uuid,
        });
        if (user === null) {
            return {
                result: [],
                code: "304",
                message: "Access authority not exist",
            };
        }
        const userEntity = new user_entity_1.User();
        userEntity.user_uuid = user_uuid;
        userEntity.isActive = isActice;
        const response = await this.dataSource
            .createQueryBuilder()
            .update(user_entity_1.User)
            .set(userEntity)
            .where("user_uuid = :user_uuid", {
            user_uuid: user_uuid,
        })
            .execute();
        if (response.affected === 1) {
            return {
                result: response,
                code: "200",
                message: "update success yay!",
            };
        }
        else {
            return {
                result: response,
                code: "80001",
                message: "update un-successfully!!!",
            };
        }
    }
    async remove(UserDto) {
        console.log("UserDto", UserDto);
        const user_uuid = UserDto.user_uuid;
        const update_by = UserDto.whois;
        console.log(user_uuid);
        const user = await this.usersRepository.findOneBy({
            user_uuid,
        });
        console.log(user);
        if (user === null) {
            return {
                result: [],
                code: "204",
                message: "user not exist",
            };
        }
        const userEntity = new user_entity_1.User();
        userEntity.user_uuid = user_uuid;
        userEntity.isActive = false;
        userEntity.recycle = true;
        userEntity.update_by = update_by;
        console.log(userEntity);
        const response = await this.dataSource
            .createQueryBuilder()
            .update(user_entity_1.User)
            .set(userEntity)
            .where("user_uuid = :user_uuid", {
            user_uuid: user_uuid,
        })
            .execute();
        console.log("delete user", response);
        if (response.affected === 1) {
            return {
                result: response,
                code: "200",
                message: "delete success yay!",
            };
        }
        else {
            return {
                result: response,
                code: "90001",
                message: "delete un-successfully!!!",
            };
        }
    }
    async removeWithSelect(removeUserDtoArray) {
        console.log(removeUserDtoArray);
        let arr = [];
        for (var i = 0; i < removeUserDtoArray.length; i++) {
            const user_row = removeUserDtoArray[i];
            const UserEntity = new user_entity_1.User();
            UserEntity.user_uuid = user_row.user_uuid;
            UserEntity.isActive = false;
            UserEntity.recycle = true;
            UserEntity.update_by = user_row.whois;
            const response = await this.dataSource
                .createQueryBuilder()
                .update(user_entity_1.User)
                .set(UserEntity)
                .where("user_uuid = :user_uuid", {
                user_uuid: UserEntity.user_uuid,
            })
                .execute();
            if (response.affected === 1) {
                arr.push(user_row.user_uuid);
            }
        }
        return { result: arr, message: "delete all success", code: "200" };
    }
    make_temp_password(length) {
        let result = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
    async resetpassword(UserDto) {
        console.log("resetpassword", UserDto);
        const user_uuid = UserDto.user_uuid;
        const update_by = UserDto.whois;
        console.log("user_uuid", user_uuid);
        const user = await this.usersRepository.findOneBy({
            user_uuid,
        });
        console.log("user", user);
        if (user === null) {
            return {
                result: [],
                code: "304",
                message: "Access authority not exist",
            };
        }
        const username = user.username;
        const password_temp = this.make_temp_password(8);
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password_temp, salt);
        const isPasswordMatching = await bcrypt.compare(password_temp, hash);
        if (!isPasswordMatching) {
            return {
                result: {},
                code: "80003",
                message: "reset password Error!!",
            };
        }
        else {
            console.log("equal");
        }
        const userEntity = new user_entity_1.User();
        userEntity.user_uuid = user_uuid;
        userEntity.password = hash;
        userEntity.recycle = false;
        userEntity.isActive = true;
        userEntity.update_by = update_by;
        console.log("userEntity", userEntity);
        const response = await this.dataSource
            .createQueryBuilder()
            .update(user_entity_1.User)
            .set(userEntity)
            .where("user_uuid = :user_uuid", {
            user_uuid: user_uuid,
        })
            .execute();
        console.log("response", response);
        if (response.affected === 1) {
            return {
                result: response,
                username: username,
                temp: password_temp,
                code: "201",
                message: "reset password success yay!",
            };
        }
        else {
            return {
                result: response,
                code: "80002",
                message: "reset password un-successfully!!!",
            };
        }
    }
    async resetpasswordByUser(UserDto) {
        console.log(UserDto);
        const user_uuid = UserDto.user_uuid;
        const update_by = UserDto.whois;
        console.log("user_uuid", user_uuid);
        const user = await this.usersRepository.findOneBy({
            user_uuid,
        });
        console.log("user", user);
        if (user === null) {
            return {
                result: [],
                code: "304",
                message: "user not exist",
            };
        }
        const password = user.password;
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);
        const isPasswordMatching = await bcrypt.compare(password, hash);
        if (!isPasswordMatching) {
            return {
                result: {},
                code: "80003",
                message: "reset password Error!!",
            };
        }
        else {
            console.log("equal");
        }
        const userEntity = new user_entity_1.User();
        userEntity.user_uuid = user_uuid;
        userEntity.password = hash;
        userEntity.recycle = false;
        userEntity.isActive = true;
        userEntity.update_by = update_by;
        console.log("userEntity", userEntity);
        const response = await this.dataSource
            .createQueryBuilder()
            .update(user_entity_1.User)
            .set(userEntity)
            .where("user_uuid = :user_uuid", {
            user_uuid: user_uuid,
        })
            .execute();
        console.log("response", response);
        if (response.affected === 1) {
            return {
                result: response,
                code: "201",
                message: "reset password success yay!",
            };
        }
        else {
            return {
                result: response,
                code: "80003",
                message: "reset password un-successfully!!!",
            };
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], UsersService);
//# sourceMappingURL=user.service.js.map
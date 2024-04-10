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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const common_1 = require("@nestjs/common");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signIn(username, password) {
        const user = await this.usersService.findByUsername(username);
        console.log(user);
        if (user !== null) {
            console.log("User");
            if (user.isActive) {
                const isMatch = password === user.password;
                if (!isMatch) {
                    throw new common_1.UnauthorizedException();
                }
                const payload = {
                    user_uuid: user.user_uuid,
                    username: user.username,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    avatar: user.avatar,
                    email: user.email,
                    status_patient: user.status_patient,
                    hospital_name: user.hospital_name,
                };
                return {
                    access_token: await this.jwtService.signAsync(payload, {
                        expiresIn: "86400s",
                        secret: "F8124C748A478F791FC519C152795",
                    }),
                };
            }
            else {
                return { loginfail: "forbidden authorization" };
            }
        }
        else {
            return { loginfail: "forbidden authorization" };
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
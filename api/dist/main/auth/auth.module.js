"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./jwt.strategy");
const core_config_service_1 = require("../../core/core-config.service");
const core_module_1 = require("../../core/core.module");
const user_module_1 = require("../user/user.module");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UsersModule,
            jwt_1.JwtModule.registerAsync({
                imports: [core_module_1.CoreModule],
                useFactory: async (appConfigService) => {
                    const options = {
                        secret: "F8124C748A478F791FC519C152795",
                        signOptions: {
                            expiresIn: "86400s",
                        },
                    };
                    return options;
                },
                inject: [core_config_service_1.CoreConfigService],
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            jwt_1.JwtService,
            jwt_strategy_1.JwtStrategy,
            core_config_service_1.CoreConfigService
        ],
        exports: [
            auth_service_1.AuthService,
            jwt_1.JwtService,
            jwt_strategy_1.JwtStrategy,
            core_config_service_1.CoreConfigService
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map
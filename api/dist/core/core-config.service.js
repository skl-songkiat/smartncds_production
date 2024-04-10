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
exports.CoreConfigService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let CoreConfigService = class CoreConfigService {
    constructor(configService) {
        this.configService = configService;
    }
    get env() {
        return this.configService.get("APP_ENV");
    }
    get name() {
        return this.configService.get("APP_NAME");
    }
    get port() {
        return Number(this.configService.get("APP_PORT"));
    }
    get url() {
        return this.configService.get("APP_URL");
    }
    get key() {
        return this.configService.get("KEY");
    }
    get secretKey() {
        return this.configService.get("SECRET_KEY");
    }
    get verfifyMTokenBaseUrl() {
        return this.configService.get("VERIFY_TOKEN_BASE_URL");
    }
    get jwtSecretKey() {
        return this.configService.get("JWT_SECRET_KEY");
    }
    get jwtPrivateKey() {
        return this.configService.get("JWT_PRIVATE_KEY");
    }
    get jwtPublicKey() {
        return this.configService.get("JWT_PUBLIC_KEY");
    }
    get databaseName() {
        return this.configService.get("DATABASE_NAME");
    }
    get databaseUsername() {
        return this.configService.get("USERNAME_DB");
    }
    get databasePassword() {
        return this.configService.get("PASSWORD_DB");
    }
    get databasePort() {
        return this.configService.get("PORT_DB");
    }
    get databaseHost() {
        return this.configService.get("HOST_DB");
    }
    ;
};
exports.CoreConfigService = CoreConfigService;
exports.CoreConfigService = CoreConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], CoreConfigService);
//# sourceMappingURL=core-config.service.js.map
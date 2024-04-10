"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const profiles_entity_1 = require("./profiles.entity");
const profiles_service_1 = require("./profiles.service");
const profiles_controller_1 = require("./profiles.controller");
const encryption_decryption_service_1 = require("../common/encryption-decryption.service");
const common_module_1 = require("../common/common.module");
const jwt_1 = require("@nestjs/jwt");
let ProfilesModule = class ProfilesModule {
};
exports.ProfilesModule = ProfilesModule;
exports.ProfilesModule = ProfilesModule = __decorate([
    (0, common_1.Module)({
        imports: [common_module_1.CommonModule, typeorm_1.TypeOrmModule.forFeature([profiles_entity_1.Profiles])],
        exports: [typeorm_1.TypeOrmModule, profiles_service_1.ProfilesService],
        providers: [profiles_service_1.ProfilesService, jwt_1.JwtService, encryption_decryption_service_1.EncryptAndDecryptService],
        controllers: [profiles_controller_1.ProfilesController],
    })
], ProfilesModule);
//# sourceMappingURL=profiles.module.js.map
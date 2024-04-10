"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile2Module = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const profile2_entity_1 = require("./profile2.entity");
const profile2_service_1 = require("./profile2.service");
const encryption_decryption_service_1 = require("../common/encryption-decryption.service");
const common_module_1 = require("../common/common.module");
const jwt_1 = require("@nestjs/jwt");
let Profile2Module = class Profile2Module {
};
exports.Profile2Module = Profile2Module;
exports.Profile2Module = Profile2Module = __decorate([
    (0, common_1.Module)({
        imports: [common_module_1.CommonModule, typeorm_1.TypeOrmModule.forFeature([profile2_entity_1.Profile2])],
        exports: [typeorm_1.TypeOrmModule, profile2_service_1.Profile2Service],
        providers: [profile2_service_1.Profile2Service, jwt_1.JwtService, encryption_decryption_service_1.EncryptAndDecryptService],
        controllers: [],
    })
], Profile2Module);
//# sourceMappingURL=profile2.module.js.map
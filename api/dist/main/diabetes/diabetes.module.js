"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiabetesRecordModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const encryption_decryption_service_1 = require("../common/encryption-decryption.service");
const common_module_1 = require("../common/common.module");
const jwt_1 = require("@nestjs/jwt");
const diabetes_service_1 = require("./diabetes.service");
const diabetes_controller_1 = require("./diabetes.controller");
const diabetes_entity_1 = require("./diabetes.entity");
let DiabetesRecordModule = class DiabetesRecordModule {
};
exports.DiabetesRecordModule = DiabetesRecordModule;
exports.DiabetesRecordModule = DiabetesRecordModule = __decorate([
    (0, common_1.Module)({
        imports: [common_module_1.CommonModule, typeorm_1.TypeOrmModule.forFeature([diabetes_entity_1.DiabetesRecord])],
        exports: [typeorm_1.TypeOrmModule, diabetes_service_1.DiabetesRecordService],
        providers: [diabetes_service_1.DiabetesRecordService, jwt_1.JwtService, encryption_decryption_service_1.EncryptAndDecryptService],
        controllers: [diabetes_controller_1.DiabetesRecordController],
    })
], DiabetesRecordModule);
//# sourceMappingURL=diabetes.module.js.map
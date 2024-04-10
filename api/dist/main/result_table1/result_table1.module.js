"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultPatientTable1Module = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const result_table1_entity_1 = require("./result_table1.entity");
const result_table1_service_1 = require("./result_table1.service");
const result_table1_controller_1 = require("./result_table1.controller");
const encryption_decryption_service_1 = require("../common/encryption-decryption.service");
const common_module_1 = require("../common/common.module");
const jwt_1 = require("@nestjs/jwt");
let ResultPatientTable1Module = class ResultPatientTable1Module {
};
exports.ResultPatientTable1Module = ResultPatientTable1Module;
exports.ResultPatientTable1Module = ResultPatientTable1Module = __decorate([
    (0, common_1.Module)({
        imports: [common_module_1.CommonModule, typeorm_1.TypeOrmModule.forFeature([result_table1_entity_1.ResultPatientTable1])],
        exports: [typeorm_1.TypeOrmModule, result_table1_service_1.ResultPatientTable1Service],
        providers: [result_table1_service_1.ResultPatientTable1Service, jwt_1.JwtService, encryption_decryption_service_1.EncryptAndDecryptService],
        controllers: [result_table1_controller_1.ResultPatientTable1Controller],
    })
], ResultPatientTable1Module);
//# sourceMappingURL=result_table1.module.js.map
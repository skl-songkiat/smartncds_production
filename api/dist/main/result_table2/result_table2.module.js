"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultPatientTable2Module = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const result_table2_entity_1 = require("./result_table2.entity");
const result_table2_service_1 = require("./result_table2.service");
const result_table2_controller_1 = require("./result_table2.controller");
const encryption_decryption_service_1 = require("../common/encryption-decryption.service");
const common_module_1 = require("../common/common.module");
const jwt_1 = require("@nestjs/jwt");
let ResultPatientTable2Module = class ResultPatientTable2Module {
};
exports.ResultPatientTable2Module = ResultPatientTable2Module;
exports.ResultPatientTable2Module = ResultPatientTable2Module = __decorate([
    (0, common_1.Module)({
        imports: [common_module_1.CommonModule, typeorm_1.TypeOrmModule.forFeature([result_table2_entity_1.ResultPatientTable2])],
        exports: [typeorm_1.TypeOrmModule, result_table2_service_1.ResultPatientTable2Service],
        providers: [result_table2_service_1.ResultPatientTable2Service, jwt_1.JwtService, encryption_decryption_service_1.EncryptAndDecryptService],
        controllers: [result_table2_controller_1.ResultPatientTable2Controller],
    })
], ResultPatientTable2Module);
//# sourceMappingURL=result_table2.module.js.map
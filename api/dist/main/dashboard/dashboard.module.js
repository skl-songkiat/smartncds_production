"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const encryption_decryption_service_1 = require("../common/encryption-decryption.service");
const common_module_1 = require("../common/common.module");
const jwt_1 = require("@nestjs/jwt");
const dashboard_service_1 = require("./dashboard.service");
const dashboard_controller_1 = require("./dashboard.controller");
const diabetes_entity_1 = require("../diabetes/diabetes.entity");
const profiles_module_1 = require("../profiles/profiles.module");
const result_table1_module_1 = require("../result_table1/result_table1.module");
const result_table2_module_1 = require("../result_table2/result_table2.module");
const profile2_module_1 = require("../profile2/profile2.module");
let DashboardModule = class DashboardModule {
};
exports.DashboardModule = DashboardModule;
exports.DashboardModule = DashboardModule = __decorate([
    (0, common_1.Module)({
        imports: [common_module_1.CommonModule, typeorm_1.TypeOrmModule.forFeature([diabetes_entity_1.DiabetesRecord]), profiles_module_1.ProfilesModule, result_table1_module_1.ResultPatientTable1Module, result_table2_module_1.ResultPatientTable2Module, profile2_module_1.Profile2Module],
        exports: [typeorm_1.TypeOrmModule, dashboard_service_1.DashboardService],
        providers: [dashboard_service_1.DashboardService, jwt_1.JwtService, encryption_decryption_service_1.EncryptAndDecryptService],
        controllers: [dashboard_controller_1.DashboardController],
    })
], DashboardModule);
//# sourceMappingURL=dashboard.module.js.map
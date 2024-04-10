"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = void 0;
const common_1 = require("@nestjs/common");
const core_config_service_1 = require("../../core/core-config.service");
const encryption_decryption_service_1 = require("./encryption-decryption.service");
const core_module_1 = require("../../core/core.module");
let CommonModule = class CommonModule {
};
exports.CommonModule = CommonModule;
exports.CommonModule = CommonModule = __decorate([
    (0, common_1.Module)({
        imports: [core_module_1.CoreModule],
        exports: [encryption_decryption_service_1.EncryptAndDecryptService, core_config_service_1.CoreConfigService],
        providers: [encryption_decryption_service_1.EncryptAndDecryptService, core_config_service_1.CoreConfigService],
    })
], CommonModule);
//# sourceMappingURL=common.module.js.map
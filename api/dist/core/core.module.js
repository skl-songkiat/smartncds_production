"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreModule = void 0;
const common_1 = require("@nestjs/common");
const core_config_service_1 = require("./core-config.service");
const config_1 = require("@nestjs/config");
const logger = new common_1.Logger('CoreConfigModule');
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'local';
logger.log(`Node Environment => ${env}`);
let CoreModule = class CoreModule {
};
exports.CoreModule = CoreModule;
exports.CoreModule = CoreModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `${process.cwd()}/config/${env.toLowerCase()}.env`,
                expandVariables: true,
                isGlobal: true,
            }),
        ],
        providers: [config_1.ConfigService, core_config_service_1.CoreConfigService],
        exports: [config_1.ConfigService, core_config_service_1.CoreConfigService],
    })
], CoreModule);
//# sourceMappingURL=core.module.js.map
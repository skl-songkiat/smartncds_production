"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainAppModule = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const core_config_service_1 = require("../core/core-config.service");
const core_module_1 = require("../core/core.module");
const common_module_1 = require("./common/common.module");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const user_entity_1 = require("./user/user.entity");
const diabetes_module_1 = require("./diabetes/diabetes.module");
const diabetes_entity_1 = require("./diabetes/diabetes.entity");
const dashboard_module_1 = require("./dashboard/dashboard.module");
const medicalterm_module_1 = require("./medicalterm/medicalterm.module");
const medicalterm_entity_1 = require("./medicalterm/medicalterm.entity");
const profiles_entity_1 = require("./profiles/profiles.entity");
const profiles_module_1 = require("./profiles/profiles.module");
const result_table1_module_1 = require("./result_table1/result_table1.module");
const result_table1_entity_1 = require("./result_table1/result_table1.entity");
const result_table2_entity_1 = require("./result_table2/result_table2.entity");
const result_table2_module_1 = require("./result_table2/result_table2.module");
const profile2_module_1 = require("./profile2/profile2.module");
const food_module_1 = require("./food/food.module");
const profile2_entity_1 = require("./profile2/profile2.entity");
const food_entity_1 = require("./food/food.entity");
let MainAppModule = class MainAppModule {
};
exports.MainAppModule = MainAppModule;
exports.MainAppModule = MainAppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.register({
                dest: './files',
            }),
            common_module_1.CommonModule,
            user_module_1.UsersModule,
            auth_module_1.AuthModule,
            diabetes_module_1.DiabetesRecordModule,
            dashboard_module_1.DashboardModule,
            medicalterm_module_1.MedicaltermModule,
            profiles_module_1.ProfilesModule,
            profile2_module_1.Profile2Module,
            food_module_1.FoodModule,
            result_table1_module_1.ResultPatientTable1Module,
            result_table2_module_1.ResultPatientTable2Module,
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [core_module_1.CoreModule],
                useFactory: (configService) => ({
                    type: "mysql",
                    host: "localhost",
                    port: 3306,
                    username: "root",
                    password: "1234",
                    database: "diabetes",
                    entities: [
                        user_entity_1.User,
                        diabetes_entity_1.DiabetesRecord,
                        medicalterm_entity_1.ncdvocab,
                        profiles_entity_1.Profiles,
                        result_table1_entity_1.ResultPatientTable1,
                        result_table2_entity_1.ResultPatientTable2,
                        profile2_entity_1.Profile2,
                        food_entity_1.Food,
                    ],
                    synchronize: true,
                }),
                inject: [core_config_service_1.CoreConfigService],
            }),
            typeorm_1.TypeOrmModule.forFeature([
                user_entity_1.User,
                diabetes_entity_1.DiabetesRecord,
                medicalterm_entity_1.ncdvocab,
                profiles_entity_1.Profiles,
                profile2_entity_1.Profile2,
                food_entity_1.Food,
                result_table1_entity_1.ResultPatientTable1,
                result_table2_entity_1.ResultPatientTable2
            ]),
        ],
        providers: [typeorm_1.TypeOrmModule],
        controllers: [],
    })
], MainAppModule);
//# sourceMappingURL=mainapp.module.js.map
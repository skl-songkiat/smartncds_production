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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const diabetes_entity_1 = require("../diabetes/diabetes.entity");
const profiles_service_1 = require("../profiles/profiles.service");
const result_table1_service_1 = require("../result_table1/result_table1.service");
const result_table2_service_1 = require("../result_table2/result_table2.service");
const profile2_service_1 = require("../profile2/profile2.service");
let DashboardService = class DashboardService {
    constructor(DiabetesRecordRepository, dataSource, profiles, resultTable1Service, resultTable2Service, profile2Service) {
        this.DiabetesRecordRepository = DiabetesRecordRepository;
        this.dataSource = dataSource;
        this.profiles = profiles;
        this.resultTable1Service = resultTable1Service;
        this.resultTable2Service = resultTable2Service;
        this.profile2Service = profile2Service;
    }
    viewchart2(DiabetesRecordDto) {
        console.log(DiabetesRecordDto);
        return this.DiabetesRecordRepository.findBy({
            create_by: DiabetesRecordDto.whois,
        });
    }
    getProfile(profile) {
        return this.profiles.findOne(profile.uuid);
    }
    getData(profile) {
        return this.resultTable1Service.find(profile.hn);
    }
    getHist(profile) {
        return this.resultTable2Service.find(profile.hn);
    }
    getNutrition(profile2) {
        return this.profile2Service.findMany(profile2.hn);
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(diabetes_entity_1.DiabetesRecord)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource,
        profiles_service_1.ProfilesService,
        result_table1_service_1.ResultPatientTable1Service,
        result_table2_service_1.ResultPatientTable2Service,
        profile2_service_1.Profile2Service])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map
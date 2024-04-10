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
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const dashboard_dto_1 = require("./dto/dashboard.dto");
const dashboard_service_1 = require("./dashboard.service");
const profiles_entity_1 = require("../profiles/profiles.entity");
const profile2_entity_1 = require("../profile2/profile2.entity");
let DashboardController = class DashboardController {
    constructor(DashboardService) {
        this.DashboardService = DashboardService;
    }
    viewchart2(Dashboard) {
        console.log(Dashboard);
        return this.DashboardService.viewchart2(Dashboard);
    }
    getProfile(profiles) {
        return this.DashboardService.getProfile(profiles);
    }
    getData(profiles) {
        return this.DashboardService.getData(profiles);
    }
    getHist(profiles) {
        return this.DashboardService.getHist(profiles);
    }
    getNutrition(profile2) {
        return this.DashboardService.getNutrition(profile2);
    }
};
exports.DashboardController = DashboardController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)("viewchart2"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dashboard_dto_1.DashboardDto]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "viewchart2", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)("profile"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profiles_entity_1.Profiles]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getProfile", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)("data"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profiles_entity_1.Profiles]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getData", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)("hist"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profiles_entity_1.Profiles]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getHist", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)("nutrition"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profile2_entity_1.Profile2]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getNutrition", null);
exports.DashboardController = DashboardController = __decorate([
    (0, common_1.Controller)("patients/diabetes/dashboard"),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], DashboardController);
//# sourceMappingURL=dashboard.controller.js.map
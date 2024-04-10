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
exports.DiabetesRecordController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const diabetes_dto_1 = require("./dto/diabetes.dto");
const diabetes_service_1 = require("./diabetes.service");
let DiabetesRecordController = class DiabetesRecordController {
    constructor(DiabetesRecordService) {
        this.DiabetesRecordService = DiabetesRecordService;
    }
    findUUid(DiabetesRecord) {
        console.log(DiabetesRecord);
        return this.DiabetesRecordService.find(DiabetesRecord);
    }
    findOne(DiabetesRecord) {
        console.log(DiabetesRecord);
        return this.DiabetesRecordService.findOne(DiabetesRecord.diabetesrecord_uuid);
    }
    createDiabetesRecord(createDiabetesRecord) {
        return this.DiabetesRecordService.create(createDiabetesRecord);
    }
    updateDiabetesRecord(updateDiabetesRecord) {
        return this.DiabetesRecordService.update(updateDiabetesRecord);
    }
    removeDiabetesRecord(removeDiabetesRecord) {
        return this.DiabetesRecordService.remove(removeDiabetesRecord);
    }
};
exports.DiabetesRecordController = DiabetesRecordController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)("view"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [diabetes_dto_1.DiabetesRecordDto]),
    __metadata("design:returntype", Promise)
], DiabetesRecordController.prototype, "findUUid", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)("viewOne"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [diabetes_dto_1.DiabetesRecordDto]),
    __metadata("design:returntype", Promise)
], DiabetesRecordController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [diabetes_dto_1.DiabetesRecordDto]),
    __metadata("design:returntype", void 0)
], DiabetesRecordController.prototype, "createDiabetesRecord", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)("update"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [diabetes_dto_1.DiabetesRecordDto]),
    __metadata("design:returntype", void 0)
], DiabetesRecordController.prototype, "updateDiabetesRecord", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)("remove"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [diabetes_dto_1.DiabetesRecordDto]),
    __metadata("design:returntype", void 0)
], DiabetesRecordController.prototype, "removeDiabetesRecord", null);
exports.DiabetesRecordController = DiabetesRecordController = __decorate([
    (0, common_1.Controller)("patients/diabetes/record"),
    __metadata("design:paramtypes", [diabetes_service_1.DiabetesRecordService])
], DiabetesRecordController);
//# sourceMappingURL=diabetes.controller.js.map
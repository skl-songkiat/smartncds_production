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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultPatientTable1 = void 0;
const typeorm_1 = require("typeorm");
let ResultPatientTable1 = class ResultPatientTable1 {
};
exports.ResultPatientTable1 = ResultPatientTable1;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ResultPatientTable1.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable1.prototype, "hn", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable1.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable1.prototype, "bmi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable1.prototype, "egfr", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable1.prototype, "hba1c", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable1.prototype, "fbs", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable1.prototype, "creatinine", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable1.prototype, "upper_bp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable1.prototype, "lower_bp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable1.prototype, "ldl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable1.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable1.prototype, "height", void 0);
exports.ResultPatientTable1 = ResultPatientTable1 = __decorate([
    (0, typeorm_1.Entity)()
], ResultPatientTable1);
//# sourceMappingURL=result_table1.entity.js.map
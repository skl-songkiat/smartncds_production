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
exports.ResultPatientTable2 = void 0;
const typeorm_1 = require("typeorm");
let ResultPatientTable2 = class ResultPatientTable2 {
};
exports.ResultPatientTable2 = ResultPatientTable2;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ResultPatientTable2.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable2.prototype, "hn", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable2.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable2.prototype, "dmfoot", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable2.prototype, "stemi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable2.prototype, "cvrisk", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable2.prototype, "stoke", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable2.prototype, "egfr", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable2.prototype, "fbs", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable2.prototype, "urine_albumin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResultPatientTable2.prototype, "eye_value", void 0);
exports.ResultPatientTable2 = ResultPatientTable2 = __decorate([
    (0, typeorm_1.Entity)()
], ResultPatientTable2);
//# sourceMappingURL=result_table2.entity.js.map
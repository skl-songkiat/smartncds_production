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
exports.DiabetesRecord = void 0;
const typeorm_1 = require("typeorm");
let DiabetesRecord = class DiabetesRecord {
};
exports.DiabetesRecord = DiabetesRecord;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DiabetesRecord.prototype, "diabetesrecord_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DiabetesRecord.prototype, "diabetesrecord_uuid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DiabetesRecord.prototype, "diabetesrecord_timerange", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DiabetesRecord.prototype, "diabetesrecord_value", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DiabetesRecord.prototype, "diabetesrecord_status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DiabetesRecord.prototype, "create_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DiabetesRecord.prototype, "create_by", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DiabetesRecord.prototype, "update_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DiabetesRecord.prototype, "update_by", void 0);
exports.DiabetesRecord = DiabetesRecord = __decorate([
    (0, typeorm_1.Entity)()
], DiabetesRecord);
//# sourceMappingURL=diabetes.entity.js.map
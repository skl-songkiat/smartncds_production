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
exports.ncdvocab = void 0;
const typeorm_1 = require("typeorm");
let ncdvocab = class ncdvocab {
};
exports.ncdvocab = ncdvocab;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ncdvocab.prototype, "index", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ncdvocab.prototype, "vocab", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ncdvocab.prototype, "English", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ncdvocab.prototype, "Thai", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ncdvocab.prototype, "Type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ncdvocab.prototype, "Unit", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ncdvocab.prototype, "Range", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], ncdvocab.prototype, "Oneself", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], ncdvocab.prototype, "Doctor1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], ncdvocab.prototype, "Doctor2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], ncdvocab.prototype, "Doctor3", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], ncdvocab.prototype, "Others_If_Any", void 0);
exports.ncdvocab = ncdvocab = __decorate([
    (0, typeorm_1.Entity)()
], ncdvocab);
//# sourceMappingURL=medicalterm.entity.js.map
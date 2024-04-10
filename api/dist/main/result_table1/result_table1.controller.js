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
exports.ResultPatientTable1Controller = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const result_table1_service_1 = require("./result_table1.service");
let ResultPatientTable1Controller = class ResultPatientTable1Controller {
    constructor(resulttable1Service) {
        this.resulttable1Service = resulttable1Service;
    }
    find(hn) {
        console.log("find", hn);
        return this.resulttable1Service.find(hn);
    }
};
exports.ResultPatientTable1Controller = ResultPatientTable1Controller;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)("view"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ResultPatientTable1Controller.prototype, "find", null);
exports.ResultPatientTable1Controller = ResultPatientTable1Controller = __decorate([
    (0, common_1.Controller)("patients/resulttable1"),
    __metadata("design:paramtypes", [result_table1_service_1.ResultPatientTable1Service])
], ResultPatientTable1Controller);
//# sourceMappingURL=result_table1.controller.js.map
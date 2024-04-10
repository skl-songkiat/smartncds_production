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
exports.ResultPatientTable2Controller = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const result_table2_service_1 = require("./result_table2.service");
let ResultPatientTable2Controller = class ResultPatientTable2Controller {
    constructor(resulttable2Service) {
        this.resulttable2Service = resulttable2Service;
    }
    find(hn) {
        console.log("find", hn);
        return this.resulttable2Service.find(hn);
    }
};
exports.ResultPatientTable2Controller = ResultPatientTable2Controller;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)("view"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ResultPatientTable2Controller.prototype, "find", null);
exports.ResultPatientTable2Controller = ResultPatientTable2Controller = __decorate([
    (0, common_1.Controller)("patients/resulttable2"),
    __metadata("design:paramtypes", [result_table2_service_1.ResultPatientTable2Service])
], ResultPatientTable2Controller);
//# sourceMappingURL=result_table2.controller.js.map
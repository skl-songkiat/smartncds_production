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
exports.ResultPatientTable1Service = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const result_table1_entity_1 = require("./result_table1.entity");
let ResultPatientTable1Service = class ResultPatientTable1Service {
    constructor(resultTable1Repository, dataSource) {
        this.resultTable1Repository = resultTable1Repository;
        this.dataSource = dataSource;
    }
    async find(hn) {
        console.log('find', hn);
        const data = await this.dataSource
            .getRepository(result_table1_entity_1.ResultPatientTable1)
            .createQueryBuilder("result")
            .where("result.hn = :hn", {
            hn: hn,
        })
            .getMany();
        console.log('data', data);
        return data;
    }
};
exports.ResultPatientTable1Service = ResultPatientTable1Service;
exports.ResultPatientTable1Service = ResultPatientTable1Service = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(result_table1_entity_1.ResultPatientTable1)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], ResultPatientTable1Service);
//# sourceMappingURL=result_table1.service.js.map
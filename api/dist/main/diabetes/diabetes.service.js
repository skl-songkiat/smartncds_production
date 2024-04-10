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
exports.DiabetesRecordService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const uuid_1 = require("uuid");
const diabetes_entity_1 = require("./diabetes.entity");
const moment = require("moment-timezone");
let DiabetesRecordService = class DiabetesRecordService {
    constructor(DiabetesRecordRepository, dataSource) {
        this.DiabetesRecordRepository = DiabetesRecordRepository;
        this.dataSource = dataSource;
    }
    findAll() {
        return this.DiabetesRecordRepository.findBy({});
    }
    findOne(diabetesrecord_uuid) {
        return this.DiabetesRecordRepository.findOneBy({
            diabetesrecord_uuid,
        });
    }
    find(DiabetesRecordDto) {
        console.log(DiabetesRecordDto);
        return this.DiabetesRecordRepository.findBy({
            create_by: DiabetesRecordDto.whois,
        });
    }
    async create(createDiabetesRecordDto) {
        const id = (0, uuid_1.v4)();
        console.log(createDiabetesRecordDto);
        const timestamp = moment().tz("Asia/Bangkok").format();
        const response = await this.DiabetesRecordRepository
            .save({
            diabetesrecord_uuid: id,
            diabetesrecord_timerange: createDiabetesRecordDto.diabetesrecord_timerange,
            diabetesrecord_value: createDiabetesRecordDto.diabetesrecord_value,
            diabetesrecord_status: createDiabetesRecordDto.diabetesrecord_status,
            create_by: createDiabetesRecordDto.whois,
            create_at: timestamp
        })
            .then((response) => {
            return response;
        })
            .catch((error) => {
            return { code: error.errno, message: error.sqlMessage };
        });
        return {
            result: response,
            code: "200",
            message: "create diabetesrecord success",
        };
    }
    async update(updateDiabetesRecordDto) {
        const diabetesrecord_uuid = updateDiabetesRecordDto.diabetesrecord_uuid;
        const diabetesrecord = await this.DiabetesRecordRepository.findOneBy({
            diabetesrecord_uuid,
        });
        if (diabetesrecord === null) {
            return {
                result: [],
                code: "304",
                message: "diabetesrecord not exist",
            };
        }
        const diabetesrecordEntity = new diabetes_entity_1.DiabetesRecord();
        diabetesrecordEntity.diabetesrecord_uuid = updateDiabetesRecordDto.diabetesrecord_uuid;
        diabetesrecordEntity.diabetesrecord_timerange = updateDiabetesRecordDto.diabetesrecord_timerange;
        diabetesrecordEntity.diabetesrecord_value = updateDiabetesRecordDto.diabetesrecord_value;
        diabetesrecordEntity.update_by = updateDiabetesRecordDto.whois;
        const response = await this.dataSource
            .createQueryBuilder()
            .update(diabetes_entity_1.DiabetesRecord)
            .set(diabetesrecordEntity)
            .where("diabetesrecord_uuid = :diabetesrecord_uuid", {
            diabetesrecord_uuid: diabetesrecord_uuid,
        })
            .execute();
        if (response.affected === 1) {
            return {
                result: response,
                code: "201",
                message: "update success yay!",
            };
        }
        else {
            return {
                result: response,
                code: "80002",
                message: "update un-successfully!!!",
            };
        }
    }
    async remove(removeDiabetesRecordDto) {
        const diabetesrecord_uuid = removeDiabetesRecordDto.diabetesrecord_uuid;
        const update_by = removeDiabetesRecordDto.whois;
        const diabetesrecord = await this.DiabetesRecordRepository.findOneBy({
            diabetesrecord_uuid,
        });
        if (diabetesrecord === null) {
            return {
                result: [],
                code: "204",
                message: "diabetesrecord not exist",
            };
        }
        const diabetesrecordEntity = new diabetes_entity_1.DiabetesRecord();
        diabetesrecordEntity.diabetesrecord_uuid = diabetesrecord_uuid;
        console.log('diabetesrecord', diabetesrecord);
        const response = await this.DiabetesRecordRepository.delete({ diabetesrecord_uuid });
        if (response.affected === 1) {
            return {
                result: response,
                code: "200",
                message: "delete success yay!",
            };
        }
        else {
            return {
                result: response,
                code: "90001",
                message: "delete un-successfully!!!",
            };
        }
    }
};
exports.DiabetesRecordService = DiabetesRecordService;
exports.DiabetesRecordService = DiabetesRecordService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(diabetes_entity_1.DiabetesRecord)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], DiabetesRecordService);
//# sourceMappingURL=diabetes.service.js.map
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
exports.Profile2Service = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const profile2_entity_1 = require("./profile2.entity");
let Profile2Service = class Profile2Service {
    constructor(profilesRepository, dataSource) {
        this.profilesRepository = profilesRepository;
        this.dataSource = dataSource;
    }
    async findMany(hn) {
        console.log('findMany', hn);
        const profile = await this.dataSource
            .getRepository(profile2_entity_1.Profile2)
            .createQueryBuilder("profiles")
            .where("profiles.hn = :hn", {
            hn: hn,
        })
            .getMany();
        console.log('profile', profile);
        return profile;
    }
};
exports.Profile2Service = Profile2Service;
exports.Profile2Service = Profile2Service = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profile2_entity_1.Profile2)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], Profile2Service);
//# sourceMappingURL=profile2.service.js.map
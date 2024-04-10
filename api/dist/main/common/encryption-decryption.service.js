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
exports.EncryptAndDecryptService = void 0;
const common_1 = require("@nestjs/common");
const crypto = require("crypto");
let EncryptAndDecryptService = class EncryptAndDecryptService {
    constructor() {
        this.algorithm = "aes-256-ctr";
        const key = "bc52245db5c08871a584e64c195b4869";
        this.secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";
        this.iv = Buffer.from(key, "hex");
    }
    encrypt(text) {
        const cipher = crypto.createCipheriv(this.algorithm, this.secretKey, this.iv);
        const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
        const data = this.iv.toString("hex") + ":" + encrypted.toString("hex");
        return data;
    }
    decrypt(hash) {
        const hastParts = hash.split(":");
        const decipher = crypto.createDecipheriv(this.algorithm, this.secretKey, Buffer.from(hastParts[0], "hex"));
        const decrpyted = Buffer.concat([
            decipher.update(Buffer.from(hastParts[1], "hex")),
            decipher.final(),
        ]);
        return decrpyted.toString();
    }
};
exports.EncryptAndDecryptService = EncryptAndDecryptService;
exports.EncryptAndDecryptService = EncryptAndDecryptService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], EncryptAndDecryptService);
//# sourceMappingURL=encryption-decryption.service.js.map
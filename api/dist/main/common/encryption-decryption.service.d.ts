/// <reference types="node" />
export declare class EncryptAndDecryptService {
    algorithm: string;
    secretKey: string;
    iv: Buffer;
    constructor();
    encrypt(text: string): string;
    decrypt(hash: string): string;
}

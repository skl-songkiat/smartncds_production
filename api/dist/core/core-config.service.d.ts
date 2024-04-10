import { ConfigService } from '@nestjs/config';
export declare class CoreConfigService {
    private configService;
    constructor(configService: ConfigService);
    get env(): string;
    get name(): string;
    get port(): number;
    get url(): string;
    get key(): string;
    get secretKey(): string;
    get verfifyMTokenBaseUrl(): string;
    get jwtSecretKey(): string;
    get jwtPrivateKey(): string;
    get jwtPublicKey(): string;
    get databaseName(): string;
    get databaseUsername(): string;
    get databasePassword(): string;
    get databasePort(): string;
    get databaseHost(): string;
}

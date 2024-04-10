import { CoreConfigService } from "src/core/core-config.service";
import { Strategy } from "passport-jwt";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private coreConfigService;
    constructor(coreConfigService: CoreConfigService);
    validate(payload: any): Promise<any>;
}
export {};

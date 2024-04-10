import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CoreConfigService } from "src/core/core-config.service";
export declare class AuthGuard implements CanActivate {
    private jwtService;
    private coreConfigService;
    constructor(jwtService: JwtService, coreConfigService: CoreConfigService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}

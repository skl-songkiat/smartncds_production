import { ProfilesService } from "./profiles.service";
import { Profiles } from "./profiles.entity";
export declare class ProfilesController {
    private readonly profilesService;
    constructor(profilesService: ProfilesService);
    findOne(uuid: any): Promise<Profiles | null>;
}

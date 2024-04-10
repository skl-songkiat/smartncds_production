import { DataSource, Repository } from "typeorm";
import { Profiles } from "./profiles.entity";
export declare class ProfilesService {
    private profilesRepository;
    private dataSource;
    constructor(profilesRepository: Repository<Profiles>, dataSource: DataSource);
    findOne(uuid: String): Promise<Profiles | null>;
}

import { DataSource, Repository } from "typeorm";
import { Profile2 } from "./profile2.entity";
export declare class Profile2Service {
    private profilesRepository;
    private dataSource;
    constructor(profilesRepository: Repository<Profile2>, dataSource: DataSource);
    findMany(hn: String): Promise<Profile2[] | null>;
}

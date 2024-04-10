import { DataSource, Repository } from "typeorm";
import { Food } from "./food.entity";
export declare class FoodService {
    private profilesRepository;
    private dataSource;
    constructor(profilesRepository: Repository<Food>, dataSource: DataSource);
    findAll(): Promise<Food[] | null>;
}

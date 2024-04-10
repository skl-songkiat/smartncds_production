import { DataSource, Repository } from "typeorm";
import { ncdvocab } from "./medicalterm.entity";
export declare class MedicaltermService {
    private MedicaltermRepository;
    private dataSource;
    constructor(MedicaltermRepository: Repository<ncdvocab>, dataSource: DataSource);
    findAll(): Promise<ncdvocab[]>;
}

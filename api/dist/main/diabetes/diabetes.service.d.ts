import { DataSource, Repository } from "typeorm";
import { DiabetesRecord } from "./diabetes.entity";
import { DiabetesRecordDto } from "./dto/diabetes.dto";
export declare class DiabetesRecordService {
    private DiabetesRecordRepository;
    private dataSource;
    constructor(DiabetesRecordRepository: Repository<DiabetesRecord>, dataSource: DataSource);
    findAll(): Promise<DiabetesRecord[]>;
    findOne(diabetesrecord_uuid: string): Promise<DiabetesRecord | null>;
    find(DiabetesRecordDto: DiabetesRecordDto): Promise<DiabetesRecord[] | null>;
    create(createDiabetesRecordDto: DiabetesRecordDto): Promise<{
        result: any;
        code: string;
        message: string;
    }>;
    update(updateDiabetesRecordDto: DiabetesRecordDto): Promise<any>;
    remove(removeDiabetesRecordDto: DiabetesRecordDto): Promise<any>;
}

import { DiabetesRecord } from "./diabetes.entity";
import { DiabetesRecordDto } from "./dto/diabetes.dto";
import { DiabetesRecordService } from "./diabetes.service";
export declare class DiabetesRecordController {
    private readonly DiabetesRecordService;
    constructor(DiabetesRecordService: DiabetesRecordService);
    findUUid(DiabetesRecord: DiabetesRecordDto): Promise<DiabetesRecord[] | null>;
    findOne(DiabetesRecord: DiabetesRecordDto): Promise<DiabetesRecord | null>;
    createDiabetesRecord(createDiabetesRecord: DiabetesRecordDto): Promise<{
        result: any;
        code: string;
        message: string;
    }>;
    updateDiabetesRecord(updateDiabetesRecord: DiabetesRecordDto): Promise<any>;
    removeDiabetesRecord(removeDiabetesRecord: DiabetesRecordDto): Promise<any>;
}

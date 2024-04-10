import { ResultPatientTable1Service } from "./result_table1.service";
import { ResultPatientTable1 } from "./result_table1.entity";
export declare class ResultPatientTable1Controller {
    private readonly resulttable1Service;
    constructor(resulttable1Service: ResultPatientTable1Service);
    find(hn: any): Promise<ResultPatientTable1[] | null>;
}

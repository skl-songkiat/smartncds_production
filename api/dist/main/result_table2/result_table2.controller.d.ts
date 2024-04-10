import { ResultPatientTable2Service } from "./result_table2.service";
import { ResultPatientTable2 } from "./result_table2.entity";
export declare class ResultPatientTable2Controller {
    private readonly resulttable2Service;
    constructor(resulttable2Service: ResultPatientTable2Service);
    find(hn: any): Promise<ResultPatientTable2[] | null>;
}

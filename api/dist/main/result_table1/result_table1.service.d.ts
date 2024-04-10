import { DataSource, Repository } from "typeorm";
import { ResultPatientTable1 } from "./result_table1.entity";
export declare class ResultPatientTable1Service {
    private resultTable1Repository;
    private dataSource;
    constructor(resultTable1Repository: Repository<ResultPatientTable1>, dataSource: DataSource);
    find(hn: String): Promise<ResultPatientTable1[] | null>;
}

import { DataSource, Repository } from "typeorm";
import { ResultPatientTable2 } from "./result_table2.entity";
export declare class ResultPatientTable2Service {
    private resultTable1Repository;
    private dataSource;
    constructor(resultTable1Repository: Repository<ResultPatientTable2>, dataSource: DataSource);
    find(hn: String): Promise<ResultPatientTable2[] | null>;
}

import { DataSource, Repository } from "typeorm";
import { DashboardDto } from "./dto/dashboard.dto";
import { DiabetesRecord } from "../diabetes/diabetes.entity";
import { ProfilesService } from "../profiles/profiles.service";
import { Profiles } from "../profiles/profiles.entity";
import { ResultPatientTable1Service } from "../result_table1/result_table1.service";
import { ResultPatientTable1 } from "../result_table1/result_table1.entity";
import { ResultPatientTable2 } from "../result_table2/result_table2.entity";
import { ResultPatientTable2Service } from "../result_table2/result_table2.service";
import { Profile2 } from "../profile2/profile2.entity";
import { Profile2Service } from "../profile2/profile2.service";
export declare class DashboardService {
    private DiabetesRecordRepository;
    private dataSource;
    private profiles;
    private resultTable1Service;
    private resultTable2Service;
    private profile2Service;
    constructor(DiabetesRecordRepository: Repository<DiabetesRecord>, dataSource: DataSource, profiles: ProfilesService, resultTable1Service: ResultPatientTable1Service, resultTable2Service: ResultPatientTable2Service, profile2Service: Profile2Service);
    viewchart2(DiabetesRecordDto: DashboardDto): Promise<DiabetesRecord[] | null>;
    getProfile(profile: Profiles): Promise<Profiles | null>;
    getData(profile: Profiles): Promise<ResultPatientTable1[] | null>;
    getHist(profile: Profiles): Promise<ResultPatientTable2[] | null>;
    getNutrition(profile2: Profile2): Promise<Profile2[] | null>;
}

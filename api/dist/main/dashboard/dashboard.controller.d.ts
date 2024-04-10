import { DashboardDto } from "./dto/dashboard.dto";
import { DashboardService } from "./dashboard.service";
import { DiabetesRecord } from "../diabetes/diabetes.entity";
import { Profiles } from "../profiles/profiles.entity";
import { ResultPatientTable1 } from "../result_table1/result_table1.entity";
import { ResultPatientTable2 } from "../result_table2/result_table2.entity";
import { Profile2 } from "../profile2/profile2.entity";
export declare class DashboardController {
    private readonly DashboardService;
    constructor(DashboardService: DashboardService);
    viewchart2(Dashboard: DashboardDto): Promise<DiabetesRecord[] | null>;
    getProfile(profiles: Profiles): Promise<Profiles | null>;
    getData(profiles: Profiles): Promise<ResultPatientTable1[] | null>;
    getHist(profiles: Profiles): Promise<ResultPatientTable2[] | null>;
    getNutrition(profile2: Profile2): Promise<Profile2[] | null>;
}

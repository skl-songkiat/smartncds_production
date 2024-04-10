import { MedicaltermService } from "./medicalterm.service";
import { ncdvocab } from "./medicalterm.entity";
export declare class MedicaltermController {
    private readonly MedicaltermService;
    constructor(MedicaltermService: MedicaltermService);
    findUUid(): Promise<ncdvocab[] | null>;
}

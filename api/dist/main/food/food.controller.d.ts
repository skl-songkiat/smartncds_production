import { FoodService } from "./food.service";
import { Food } from "./food.entity";
export declare class FoodController {
    private readonly foodService;
    constructor(foodService: FoodService);
    findOne(uuid: any): Promise<Food[] | null>;
}

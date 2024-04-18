import { getAllFood, getFoodSearch } from "../../bin/db";



export class FoodService {

    public static async getFood() {
        const getData = await getAllFood();
        if (getData) {
            return getData;
        } else {
            return null
        }
    }

    public static async getFoodSearch(regexParam: any) {
        const getData = await getFoodSearch(regexParam);
        if (getData) {
            return getData
        } else {
            return null
        }
    }


}
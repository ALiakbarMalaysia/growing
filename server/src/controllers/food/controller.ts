import BuildResponse from "../../modules/Response/BuildResponse";
import asyncHandler from "../../helper/asyncHandler";
import routes from "../../routes/public";
import { FoodService } from "./service";
import { Request, Response } from "express";


routes.get(
    "/foods",
    asyncHandler(async function getAllFood(req: Request, res: Response) {
        const data = await FoodService.getFood();
        const builldResponse = BuildResponse.get(data)
        return res.json(builldResponse);
    })
);

routes.get(
    '/search/:searchTerm',
    asyncHandler(async function getFoodSearch(req: Request, res: Response) {
        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        const getData = await FoodService.getFoodSearch(searchRegex);
        const builldResponse = BuildResponse.get(getData)
        return res.json(builldResponse);
    })

)
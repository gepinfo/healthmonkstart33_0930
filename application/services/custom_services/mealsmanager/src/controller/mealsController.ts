import { Request, Response } from 'express';
import { mealsService } from '../service/mealsService';
import { CustomLogger } from '../config/Logger'
let meals = new mealsService();

export class mealsController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
meals.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mealsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mealsController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
meals.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mealsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mealsController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
meals.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mealsController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mealsController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
meals.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mealsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mealsController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
meals.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mealsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mealsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
meals.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mealsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mealsController.ts: GpCreate');
    })}


}
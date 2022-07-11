import { Request, Response } from 'express';
import { nutritiondetailsService } from '../service/nutritiondetailsService';
import { CustomLogger } from '../config/Logger'
let nutritiondetails = new nutritiondetailsService();

export class nutritiondetailsController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
nutritiondetails.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritiondetailsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritiondetailsController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
nutritiondetails.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritiondetailsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritiondetailsController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
nutritiondetails.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritiondetailsController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritiondetailsController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
nutritiondetails.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritiondetailsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritiondetailsController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
nutritiondetails.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritiondetailsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritiondetailsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
nutritiondetails.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nutritiondetailsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nutritiondetailsController.ts: GpCreate');
    })}


}
import { Request, Response } from 'express';
import { workoutdetailsService } from '../service/workoutdetailsService';
import { CustomLogger } from '../config/Logger'
let workoutdetails = new workoutdetailsService();

export class workoutdetailsController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
workoutdetails.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into workoutdetailsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from workoutdetailsController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
workoutdetails.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into workoutdetailsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from workoutdetailsController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
workoutdetails.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into workoutdetailsController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from workoutdetailsController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
workoutdetails.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into workoutdetailsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from workoutdetailsController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
workoutdetails.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into workoutdetailsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from workoutdetailsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
workoutdetails.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into workoutdetailsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from workoutdetailsController.ts: GpCreate');
    })}


}
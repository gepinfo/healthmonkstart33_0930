import { Request, Response } from 'express';
import { dishService } from '../service/dishService';
import { CustomLogger } from '../config/Logger'
let dish = new dishService();

export class dishController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
dish.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into dishController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from dishController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
dish.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into dishController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from dishController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
dish.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into dishController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from dishController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
dish.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into dishController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from dishController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
dish.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into dishController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from dishController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
dish.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into dishController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from dishController.ts: GpCreate');
    })}


}
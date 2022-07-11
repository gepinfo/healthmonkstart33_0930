import { Request, Response } from 'express';
import { personnameService } from '../service/personnameService';
import { CustomLogger } from '../config/Logger'
let personname = new personnameService();

export class personnameController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
personname.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into personnameController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from personnameController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
personname.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into personnameController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from personnameController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
personname.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into personnameController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from personnameController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
personname.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into personnameController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from personnameController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
personname.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into personnameController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from personnameController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
personname.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into personnameController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from personnameController.ts: GpCreate');
    })}


}
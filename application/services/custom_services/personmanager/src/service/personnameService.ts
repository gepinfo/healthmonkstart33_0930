import { Request, Response } from 'express';
import {personnameDao} from '../dao/personnameDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let personname = new personnameDao();

export class personnameService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into personnameService.ts: GpDelete')
     let  personnameId = req.params.id;
     personname.GpDelete(personnameId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from personnameService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into personnameService.ts: GpSearch')
     let  personnameData = req.query;
     personname.GpSearch(personnameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from personnameService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into personnameService.ts: GpSearchForUpdate')
     let  personnameData = req.body;
     personname.GpSearchForUpdate(personnameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from personnameService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into personnameService.ts: GpUpdate')
     let  personnameData = req.body;
     personname.GpUpdate(personnameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from personnameService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into personnameService.ts: GpGetAllValues')
     
     personname.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from personnameService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into personnameService.ts: GpCreate')
     let  personnameData = req.body;
     personname.GpCreate(personnameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from personnameService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}
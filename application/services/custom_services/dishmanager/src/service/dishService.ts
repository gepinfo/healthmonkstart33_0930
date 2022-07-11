import { Request, Response } from 'express';
import {dishDao} from '../dao/dishDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let dish = new dishDao();

export class dishService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into dishService.ts: GpDelete')
     let  dishId = req.params.id;
     dish.GpDelete(dishId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from dishService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into dishService.ts: GpSearch')
     let  dishData = req.query;
     dish.GpSearch(dishData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from dishService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into dishService.ts: GpSearchForUpdate')
     let  dishData = req.body;
     dish.GpSearchForUpdate(dishData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from dishService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into dishService.ts: GpUpdate')
     let  dishData = req.body;
     dish.GpUpdate(dishData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from dishService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into dishService.ts: GpGetAllValues')
     
     dish.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from dishService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into dishService.ts: GpCreate')
     let  dishData = req.body;
     dish.GpCreate(dishData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from dishService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}
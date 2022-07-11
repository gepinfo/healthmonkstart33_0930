import { Request, Response } from 'express';
import {mealsDao} from '../dao/mealsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let meals = new mealsDao();

export class mealsService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mealsService.ts: GpDelete')
     let  mealsId = req.params.id;
     meals.GpDelete(mealsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from mealsService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mealsService.ts: GpSearch')
     let  mealsData = req.query;
     meals.GpSearch(mealsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from mealsService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mealsService.ts: GpSearchForUpdate')
     let  mealsData = req.body;
     meals.GpSearchForUpdate(mealsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from mealsService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mealsService.ts: GpUpdate')
     let  mealsData = req.body;
     meals.GpUpdate(mealsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from mealsService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mealsService.ts: GpGetAllValues')
     
     meals.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from mealsService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mealsService.ts: GpCreate')
     let  mealsData = req.body;
     meals.GpCreate(mealsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from mealsService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}
import { Request, Response } from 'express';
import {workoutdetailsDao} from '../dao/workoutdetailsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let workoutdetails = new workoutdetailsDao();

export class workoutdetailsService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into workoutdetailsService.ts: GpDelete')
     let  workoutdetailsId = req.params.id;
     workoutdetails.GpDelete(workoutdetailsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from workoutdetailsService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into workoutdetailsService.ts: GpSearch')
     let  workoutdetailsData = req.query;
     workoutdetails.GpSearch(workoutdetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from workoutdetailsService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into workoutdetailsService.ts: GpSearchForUpdate')
     let  workoutdetailsData = req.body;
     workoutdetails.GpSearchForUpdate(workoutdetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from workoutdetailsService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into workoutdetailsService.ts: GpUpdate')
     let  workoutdetailsData = req.body;
     workoutdetails.GpUpdate(workoutdetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from workoutdetailsService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into workoutdetailsService.ts: GpGetAllValues')
     
     workoutdetails.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from workoutdetailsService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into workoutdetailsService.ts: GpCreate')
     let  workoutdetailsData = req.body;
     workoutdetails.GpCreate(workoutdetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from workoutdetailsService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}
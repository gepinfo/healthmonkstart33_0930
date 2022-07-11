import { Request, Response } from 'express';
import {nutritiondetailsDao} from '../dao/nutritiondetailsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let nutritiondetails = new nutritiondetailsDao();

export class nutritiondetailsService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritiondetailsService.ts: GpDelete')
     let  nutritiondetailsId = req.params.id;
     nutritiondetails.GpDelete(nutritiondetailsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritiondetailsService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritiondetailsService.ts: GpSearch')
     let  nutritiondetailsData = req.query;
     nutritiondetails.GpSearch(nutritiondetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritiondetailsService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritiondetailsService.ts: GpSearchForUpdate')
     let  nutritiondetailsData = req.body;
     nutritiondetails.GpSearchForUpdate(nutritiondetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritiondetailsService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritiondetailsService.ts: GpUpdate')
     let  nutritiondetailsData = req.body;
     nutritiondetails.GpUpdate(nutritiondetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritiondetailsService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritiondetailsService.ts: GpGetAllValues')
     
     nutritiondetails.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritiondetailsService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nutritiondetailsService.ts: GpCreate')
     let  nutritiondetailsData = req.body;
     nutritiondetails.GpCreate(nutritiondetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nutritiondetailsService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}
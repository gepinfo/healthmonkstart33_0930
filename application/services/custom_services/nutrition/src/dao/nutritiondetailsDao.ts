import * as mongoose from 'mongoose';
import nutritiondetailsModel from '../models/nutritiondetails';
import { CustomLogger } from '../config/Logger'


export class nutritiondetailsDao {
    private nutritiondetails = nutritiondetailsModel;
    constructor() { }
    
    public async GpDelete(nutritiondetailsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritiondetailsDao.ts: GpDelete');

    

    
    
    
    this.nutritiondetails.findByIdAndRemove(nutritiondetailsId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritiondetailsDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(nutritiondetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritiondetailsDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(nutritiondetailsData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.nutritiondetails.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritiondetailsDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(nutritiondetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritiondetailsDao.ts: GpSearchForUpdate');

    

    
    
    
    this.nutritiondetails.findOneAndUpdate({ _id: nutritiondetailsData._id }, nutritiondetailsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritiondetailsDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(nutritiondetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritiondetailsDao.ts: GpUpdate');

    

    
    
    
    this.nutritiondetails.findOneAndUpdate({ _id: nutritiondetailsData._id }, nutritiondetailsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritiondetailsDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritiondetailsDao.ts: GpGetAllValues');

    

    
    
    
    this.nutritiondetails.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritiondetailsDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(nutritiondetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nutritiondetailsDao.ts: GpCreate');

    let temp = new nutritiondetailsModel(nutritiondetailsData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nutritiondetailsDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}
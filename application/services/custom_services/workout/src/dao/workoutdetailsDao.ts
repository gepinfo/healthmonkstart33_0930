import * as mongoose from 'mongoose';
import workoutdetailsModel from '../models/workoutdetails';
import { CustomLogger } from '../config/Logger'


export class workoutdetailsDao {
    private workoutdetails = workoutdetailsModel;
    constructor() { }
    
    public async GpDelete(workoutdetailsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into workoutdetailsDao.ts: GpDelete');

    

    
    
    
    this.workoutdetails.findByIdAndRemove(workoutdetailsId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from workoutdetailsDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(workoutdetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into workoutdetailsDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(workoutdetailsData).forEach(
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
    this.workoutdetails.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from workoutdetailsDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(workoutdetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into workoutdetailsDao.ts: GpSearchForUpdate');

    

    
    
    
    this.workoutdetails.findOneAndUpdate({ _id: workoutdetailsData._id }, workoutdetailsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from workoutdetailsDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(workoutdetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into workoutdetailsDao.ts: GpUpdate');

    

    
    
    
    this.workoutdetails.findOneAndUpdate({ _id: workoutdetailsData._id }, workoutdetailsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from workoutdetailsDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into workoutdetailsDao.ts: GpGetAllValues');

    

    
    
    
    this.workoutdetails.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from workoutdetailsDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(workoutdetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into workoutdetailsDao.ts: GpCreate');

    let temp = new workoutdetailsModel(workoutdetailsData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from workoutdetailsDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}
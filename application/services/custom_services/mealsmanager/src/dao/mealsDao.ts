import * as mongoose from 'mongoose';
import mealsModel from '../models/meals';
import { CustomLogger } from '../config/Logger'


export class mealsDao {
    private meals = mealsModel;
    constructor() { }
    
    public async GpDelete(mealsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into mealsDao.ts: GpDelete');

    

    
    
    
    this.meals.findByIdAndRemove(mealsId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from mealsDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(mealsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into mealsDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(mealsData).forEach(
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
    this.meals.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from mealsDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(mealsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into mealsDao.ts: GpSearchForUpdate');

    

    
    
    
    this.meals.findOneAndUpdate({ _id: mealsData._id }, mealsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from mealsDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(mealsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into mealsDao.ts: GpUpdate');

    

    
    
    
    this.meals.findOneAndUpdate({ _id: mealsData._id }, mealsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from mealsDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into mealsDao.ts: GpGetAllValues');

    

    
    
    
    this.meals.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from mealsDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(mealsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into mealsDao.ts: GpCreate');

    let temp = new mealsModel(mealsData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from mealsDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}
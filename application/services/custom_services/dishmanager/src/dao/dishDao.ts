import * as mongoose from 'mongoose';
import dishModel from '../models/dish';
import { CustomLogger } from '../config/Logger'


export class dishDao {
    private dish = dishModel;
    constructor() { }
    
    public async GpDelete(dishId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into dishDao.ts: GpDelete');

    

    
    
    
    this.dish.findByIdAndRemove(dishId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from dishDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(dishData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into dishDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(dishData).forEach(
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
    this.dish.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from dishDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(dishData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into dishDao.ts: GpSearchForUpdate');

    

    
    
    
    this.dish.findOneAndUpdate({ _id: dishData._id }, dishData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from dishDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(dishData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into dishDao.ts: GpUpdate');

    

    
    
    
    this.dish.findOneAndUpdate({ _id: dishData._id }, dishData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from dishDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into dishDao.ts: GpGetAllValues');

    

    
    
    
    this.dish.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from dishDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(dishData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into dishDao.ts: GpCreate');

    let temp = new dishModel(dishData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from dishDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}
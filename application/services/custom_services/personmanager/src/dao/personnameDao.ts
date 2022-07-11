import * as mongoose from 'mongoose';
import personnameModel from '../models/personname';
import { CustomLogger } from '../config/Logger'


export class personnameDao {
    private personname = personnameModel;
    constructor() { }
    
    public async GpDelete(personnameId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into personnameDao.ts: GpDelete');

    

    
    
    
    this.personname.findByIdAndRemove(personnameId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from personnameDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(personnameData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into personnameDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(personnameData).forEach(
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
    this.personname.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from personnameDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(personnameData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into personnameDao.ts: GpSearchForUpdate');

    

    
    
    
    this.personname.findOneAndUpdate({ _id: personnameData._id }, personnameData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from personnameDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(personnameData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into personnameDao.ts: GpUpdate');

    

    
    
    
    this.personname.findOneAndUpdate({ _id: personnameData._id }, personnameData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from personnameDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into personnameDao.ts: GpGetAllValues');

    

    
    
    
    this.personname.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from personnameDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(personnameData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into personnameDao.ts: GpCreate');

    let temp = new personnameModel(personnameData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from personnameDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}
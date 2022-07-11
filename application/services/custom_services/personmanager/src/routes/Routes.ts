import { Request, Response, NextFunction } from "express";
import { personnameController } from '../controller/personnameController';


export class Routes {
    private personname: personnameController = new personnameController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/personname/:id').delete(this.personname.GpDelete);
app.route('/personname/get/search').get(this.personname.GpSearch);
app.route('/personname/get/update').put(this.personname.GpSearchForUpdate);
app.route('/personname').put(this.personname.GpUpdate);
app.route('/personname').get(this.personname.GpGetAllValues);
app.route('/personname').post(this.personname.GpCreate);
     }

}
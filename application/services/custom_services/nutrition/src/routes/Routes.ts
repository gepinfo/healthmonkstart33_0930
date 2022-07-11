import { Request, Response, NextFunction } from "express";
import { nutritiondetailsController } from '../controller/nutritiondetailsController';


export class Routes {
    private nutritiondetails: nutritiondetailsController = new nutritiondetailsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/nutritiondetails/:id').delete(this.nutritiondetails.GpDelete);
app.route('/nutritiondetails/get/search').get(this.nutritiondetails.GpSearch);
app.route('/nutritiondetails/get/update').put(this.nutritiondetails.GpSearchForUpdate);
app.route('/nutritiondetails').put(this.nutritiondetails.GpUpdate);
app.route('/nutritiondetails').get(this.nutritiondetails.GpGetAllValues);
app.route('/nutritiondetails').post(this.nutritiondetails.GpCreate);
     }

}
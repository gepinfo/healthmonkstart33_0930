import { Request, Response, NextFunction } from "express";
import { workoutdetailsController } from '../controller/workoutdetailsController';


export class Routes {
    private workoutdetails: workoutdetailsController = new workoutdetailsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/workoutdetails/:id').delete(this.workoutdetails.GpDelete);
app.route('/workoutdetails/get/search').get(this.workoutdetails.GpSearch);
app.route('/workoutdetails/get/update').put(this.workoutdetails.GpSearchForUpdate);
app.route('/workoutdetails').put(this.workoutdetails.GpUpdate);
app.route('/workoutdetails').get(this.workoutdetails.GpGetAllValues);
app.route('/workoutdetails').post(this.workoutdetails.GpCreate);
     }

}
import { Request, Response, NextFunction } from "express";
import { dishController } from '../controller/dishController';


export class Routes {
    private dish: dishController = new dishController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/dish/:id').delete(this.dish.GpDelete);
app.route('/dish/get/search').get(this.dish.GpSearch);
app.route('/dish/get/update').put(this.dish.GpSearchForUpdate);
app.route('/dish').put(this.dish.GpUpdate);
app.route('/dish').get(this.dish.GpGetAllValues);
app.route('/dish').post(this.dish.GpCreate);
     }

}
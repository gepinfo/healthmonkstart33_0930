import { Request, Response, NextFunction } from "express";
import { mealsController } from '../controller/mealsController';


export class Routes {
    private meals: mealsController = new mealsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/meals/:id').delete(this.meals.GpDelete);
app.route('/meals/get/search').get(this.meals.GpSearch);
app.route('/meals/get/update').put(this.meals.GpSearchForUpdate);
app.route('/meals').put(this.meals.GpUpdate);
app.route('/meals').get(this.meals.GpGetAllValues);
app.route('/meals').post(this.meals.GpCreate);
     }

}
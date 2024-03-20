import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";

const Meals = () => {
    const meals=useLoaderData()
    const mealObj=meals.meals;


    return (
        <div>
            <h3 className="text-white font-bold">Meal:{mealObj.length}</h3>
            <div className="grid grid-cols-3 gap-5 text-center text-white">
            {
                mealObj.map((meal)=> <Meal key={meal.id} meal={meal}></Meal> )
            }
            </div>
        </div>
    );
};

export default Meals;
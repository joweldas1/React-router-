import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
const Meal = ({ meal }) => {
  const { idMeal, strArea, strMealThumb } = meal;
 const navigate=useNavigate()
  const handleOnDetails=()=>{
    navigate(`/meal/${idMeal}`)
  }

  return (
    <div key={idMeal} className=" border-2 border-green-500 p-3 rounded-2xl ">
      <img src={strMealThumb} alt="" />
      <h4 className="py-2">Country: {strArea}</h4>
      <Link to={`/meal/${idMeal}`} ><button className="bg-white text-black rounded-lg text-sm p-1"> Alternative </button> </Link> <br />
      <button onClick={handleOnDetails} className="mt-4 bg-green-600 py-1 px-2 rounded-lg">
        Click to See Details
       </button>
    </div>
  );
};
Meal.propTypes = {
  meal: PropTypes.object,
  idMeal: PropTypes.object,
};
export default Meal;

import { useLoaderData, useNavigate } from "react-router-dom";


const MealDetails = () => {
  const detail = useLoaderData();
  const data = detail.meals;
  console.log(data);
    const navigate=useNavigate()
    const handleToBack=()=>{
        navigate(-1)
    }


  return (
    <div className="max-w-6xl m-auto text-center">
      {data.map((i, idx) => (
        <div className="flex flex-col items-center text-white text-2xl" key={idx}>
            
          <img className="w-80" src={i.strMealThumb} alt="" />
          <h3>Meal Type : { i.strCategory}</h3>
          <h3>Country :  {i.strArea}</h3>
          <h3>Name : {i.strMeal}</h3>
          <button onClick={handleToBack}  className="bg-green-600 mt-6 py-1 px-2 rounded-lg text-sm">
            Go Back
       </button>
          
        </div>
      ))}
    </div>
  );
};

export default MealDetails;

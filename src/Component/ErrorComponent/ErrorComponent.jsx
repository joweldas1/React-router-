import { Link, useRouteError } from "react-router-dom";


const ErrorComponent = () => {
    const error=useRouteError()
    return (
        <div className=" bg-red-500 h-[100vh] flex items-center justify-center">
            <div className=" ">
            <h3 className="text-black text-5xl">Opppos.....</h3>
            <p className="text-4xl mt-5">
                {
                    error.statusText||error.message
                }
            </p>
            <Link to="/" ><button className="text-3xl mt-5 bg-green-950 p-2 rounded-xl" >Go to Home</button></Link>
            </div>
            
        </div>
    );
};

export default ErrorComponent;
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-[300px]">
            <h2 className="text-3xl">Oops!!!  Error 404!!!! </h2>
            <h2 className="text-7xl mb-10 mt-5">Page Not Found!</h2>
            <Link className="border-red-600 border p-3 rounded-2xl" to="/">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;
import { useNavigate } from "react-router-dom";

const PrivateRouteNotAccess = () => {
    const navigate = useNavigate();

    return (
        <div className="container text-center mt-20">
            <h1 className="text-xl font-bold text-red-400 sm:text-2xl lg:text-4xl">
                اینجا صفحه محافظت شده است. لطفاً وارد شوید.
            </h1>
            <div className="flex justify-center gap-5 mt-20">
                <button className="btn" onClick={() => navigate("/auth/login")}>
                    ورود
                </button>
                <button className="btn" onClick={() => navigate("/auth/register")}>
                    ثبت نام
                </button>
            </div>
        </div>
    );
};

export default PrivateRouteNotAccess;

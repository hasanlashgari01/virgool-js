import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Aside from "./layout/Aside";

const Index = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/admin") {
            navigate("index");
        }
    }, []);

    return (
        <div className="min-h-screen bg-slate-100">
            <div className="container my-10 flex gap-10">
                <Aside />
                <Outlet />
            </div>
        </div>
    );
};

export default Index;

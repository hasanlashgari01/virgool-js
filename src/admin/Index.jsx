import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Aside from "./layout/Aside";
import Header from "./layout/Header";

const Index = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("index");
    }, []);

    return (
        <div className="min-h-screen bg-slate-100">
            <Header />
            <div className="container my-10 flex gap-10">
                <Aside />
                <Outlet />
            </div>
        </div>
    );
};

export default Index;

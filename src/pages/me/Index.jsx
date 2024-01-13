import { Outlet } from "react-router-dom";

const Index = () => {
    return (
        <>
            <div className="container mt-5">
                <Outlet />
            </div>
        </>
    );
};

export default Index;

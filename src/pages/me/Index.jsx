import { Outlet } from "react-router-dom";
import HeaderTop from "../../components/templates/HeaderTop";

const Index = () => {
    return (
        <>
            <HeaderTop isLogin={true} />
            <div className="container mt-5">
                <Outlet />
            </div>
        </>
    );
};

export default Index;

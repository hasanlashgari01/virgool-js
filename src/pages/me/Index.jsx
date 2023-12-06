import { Outlet } from "react-router-dom";
import HeaderTop from "../../components/templates/HeaderTop";

const Index = () => {
    return (
        <>
            <HeaderTop />
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Index;

import { Outlet } from "react-router-dom";
import HeaderTop from "../../components/templates/HeaderTop";

const Index = () => {
    return (
        <>
            <HeaderTop isLogin={true} />
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Index;

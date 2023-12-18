import { Outlet } from "react-router-dom";
import Header from "../../layouts/posts/Nav";
import HeaderTop from "../../components/templates/HeaderTop";

const Index = () => {
    return (
        <>
            <HeaderTop />
            <div className="container">
                <Header />
                <Outlet />
            </div>
        </>
    );
};

export default Index;

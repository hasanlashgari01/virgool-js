import Header from "../../admin/layout/Header";
import { useAuth } from "../../context/AuthContext";
import PrivateRouteNotAccess from "../modules/PrivateRouteNotAccess";

const PanelAdminPrivate = ({ children }) => {
    const { user } = useAuth();

    return (
        <>
            <Header />
            {user ? <>{children}</> : <PrivateRouteNotAccess />}
        </>
    );
};

export default PanelAdminPrivate;

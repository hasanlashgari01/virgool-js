import { useAuth } from "../../context/AuthContext";
import PrivateRouteNotAccess from "../modules/PrivateRouteNotAccess";
import HeaderTop from "../templates/HeaderTop";

const UserPrivate = ({ children }) => {
    const { user } = useAuth();

    return (
        <>
            <HeaderTop />
            {user ? <>{children}</> : <PrivateRouteNotAccess />}
        </>
    );
};

export default UserPrivate;

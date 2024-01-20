import propTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { apiRequestsAccess } from "../services/axios/config";
import { getTokenFromLocalStorage } from "../services/func";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [defaultValue, setDefaultValue] = useState({
        isLoggedIn: false,
        token: null,
        userInfos: null,
        login: () => {},
        logout: () => {},
    });

    const loginHandler = (token) => {
        localStorage.setItem("user", JSON.stringify({ isLoggedIn: true, token }));
    };

    const logoutHandler = () => {
        setDefaultValue({ isLoggedIn: false, token: null, userInfos: null });
        localStorage.removeItem("user");
    };

    const fetchData = () => {
        if (getTokenFromLocalStorage()) {
            apiRequestsAccess("v1/auth/getMe")
                .then((res) => res.status == 200 && setDefaultValue({ isLoggedIn: true, userInfos: res.data }))
                .catch((err) => err.response);
        }
    };

    useEffect(() => {
        fetchData();
    }, [getTokenFromLocalStorage()?.isLoggedIn]);

    return (
        <AuthContext.Provider value={{ defaultValue, loginHandler, logout: logoutHandler }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const {
        defaultValue: { userInfos: user, isLoggedIn: isLoggin },
        logout,
    } = useContext(AuthContext);
    return { user, isLoggin, logout };
};

AuthProvider.propTypes = {
    children: propTypes.object,
};

export default AuthProvider;
export { useAuth };

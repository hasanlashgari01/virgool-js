import axios from "axios";
import propTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { getTokenFromLocalStorage } from "../services/func";
import { getMe } from "../services/virgoolApi";

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
            axios
                .get(getMe(), { headers: { Authorization: `Bearer ${getTokenFromLocalStorage()?.token}` } })
                .then((res) => {
                    if (res.status == 200) {
                        setDefaultValue({ isLoggedIn: true, userInfos: res.data });
                    }
                })
                .catch((err) => err.response);
        }
    };

    useEffect(() => {
        fetchData();
        console.log(1)
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

import { createContext, useEffect, useState } from "react";
import propTypes from "prop-types";
import axios from "axios";
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

    const loginHandler = (token, data) => {
        setDefaultValue({ ...defaultValue, isLoggedIn: true, token, userInfos: data });
        localStorage.setItem("user", JSON.stringify(defaultValue));
    };

    const logoutHandler = () => {
        setDefaultValue({ ...defaultValue, token: null, userInfos: null });
        localStorage.removeItem("user");
    };

    useEffect(() => {
        axios
            .get(getMe(), { headers: { Authorization: `Bearer ${getTokenFromLocalStorage().token}` } })
            .then((res) => {
                if (res.status == 200) {
                    setDefaultValue({ isLoggedIn: true, userInfos: getTokenFromLocalStorage().userInfos });
                } else {
                    setDefaultValue({ isLoggedIn: false });
                }
            })
            .catch((err) => err.response);
    }, []);

    return (
        <AuthContext.Provider value={{ defaultValue, loginHandler, logoutHandler }}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: propTypes.object,
};

export default AuthProvider;

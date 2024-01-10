import { createContext, useState } from "react";
import propTypes from "prop-types";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [defaultValue, setDefaultValue] = useState([
        {
            isLoggedIn: false,
            token: null,
            userInfos: null,
            login: () => {},
            logout: () => {},
        },
    ]);

    const loginHandler = (token) => {
        setDefaultValue({ ...defaultValue, isLoggedIn: true, token });
        localStorage.setItem("user", JSON.stringify(token));
    };

    const logoutHandler = () => {
        setDefaultValue({ ...defaultValue, token: null, userInfos: null });
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ defaultValue, loginHandler, logoutHandler }}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: propTypes.object,
};

export default AuthProvider;

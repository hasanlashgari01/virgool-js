import { useState } from "react";
import HeaderTop from "../components/templates/HeaderTop";
import HeaderNav from "../components/templates/HeaderNav";

const Header = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <header>
            <HeaderTop isLogin={isLogin} />
            <HeaderNav isLogin={isLogin} />
        </header>
    );
};

export default Header;

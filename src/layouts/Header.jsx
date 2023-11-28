import { useState } from "react";
import HeaderTop from "../components/templates/HeaderTop";
import HeaderNav from "../components/templates/HeaderNav";

const items = [
	{ id: 1, link: "/", name: "صفحه اصلی" },
	{ id: 2, link: "/auth/register", name: "ثبت نام" },
	{ id: 3, link: "/auth/login", name: "ورود" },
	{ id: 4, link: "/me", name: "حساب کاربری" },
];

const Header = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<header>
			<HeaderTop isLogin={isLogin} />
			<HeaderNav isLogin={isLogin} items={items} />
		</header>
	);
};

export default Header;

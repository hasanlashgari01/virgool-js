import { useState } from "react";
import Welcome from "../components/templates/Welcome";

const Aside = () => {
	const [isLogin, setIsLogin] = useState(false);

	return <div className="max-tb:hidden w-1/3">{!isLogin && <Welcome />}</div>;
};

export default Aside;

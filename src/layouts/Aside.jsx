import { useState } from "react";
import { Link } from "react-router-dom";
import Welcome from "../components/templates/Welcome";

const Aside = () => {
	const [isLogin, setIsLogin] = useState(false);

	return <div className="max-tb:hidden">{!isLogin && <Welcome />}</div>;
};

export default Aside;

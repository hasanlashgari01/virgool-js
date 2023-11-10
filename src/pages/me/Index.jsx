import { Outlet } from "react-router-dom";
import Header from "../../layouts/me/Header";
import Aside from "../../layouts/me/Aside";

const Index = () => {
	return (
		<>
			<Header />
			<div>
				<Aside />
				<Outlet />
			</div>
		</>
	);
};

export default Index;

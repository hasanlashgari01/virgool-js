import { Outlet } from "react-router-dom";
import Header from "../../layouts/posts/Header";

const Index = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default Index;

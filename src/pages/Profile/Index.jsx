import { Outlet, useParams } from "react-router-dom";
import Header from "../../layouts/Profile/Header";

const UserProfile = () => {
	let { username } = useParams();

	return (
		<>
			<div>
				<Header />
				کاربر : {username}
			</div>
			<Outlet />
		</>
	);
};

export default UserProfile;

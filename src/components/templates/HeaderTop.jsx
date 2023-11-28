import { Link } from "react-router-dom";
import NewPost from "./NewPost";
import ProfileDropDown from "./ProfileDropDown";

const HeaderTop = ({ isLogin }) => {
	return (
		<div className="container flex justify-between items-center py-6">
			<div className="flex gap-2.5">
				<img src="https://virgool.io/images/icon.svg" alt="آیکون ویرگول" />
				<NewPost />
			</div>
			<div className="flex gap-3 items-center">
				<Link to="/auth/login" className="text-blue-500 bg-white py-2 px-6">
					ورود
				</Link>
				<Link to="/auth/register" className="btn">
					ثبت نام
				</Link>
				{isLogin && <ProfileDropDown />}
			</div>
		</div>
	);
};

export default HeaderTop;

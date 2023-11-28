import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IoMdNotificationsOutline, IoIosSearch  } from "react-icons/io";
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
				<IoIosSearch  size={24} />
				{isLogin ? (
					<>
						<IoMdNotificationsOutline size={24} />
						<ProfileDropDown />
					</>
				) : (
					<>
						<Link to="/auth/login" className="text-blue-500 bg-white py-2 px-6">
							ورود
						</Link>
						<Link to="/auth/register" className="btn">
							ثبت نام
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

HeaderTop.propTypes = {
	isLogin: PropTypes.bool,
};

export default HeaderTop;

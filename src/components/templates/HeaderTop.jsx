import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import NewPost from "./NewPost";
import ProfileDropDown from "./ProfileDropDown";
import HeaderNotifications from "./HeaderNotifications";
import HeaderSearch from "./HeaderSearch";

const HeaderTop = ({ isLogin }) => {
    return (
        <div className="container flex items-center justify-between py-6">
            <div className="flex gap-2.5">
                <Link to="/">
                    <img src="https://virgool.io/images/icon.svg" alt="آیکون ویرگول" />
                </Link>
                <NewPost />
            </div>
            <div className="flex items-center gap-3">
                <HeaderSearch />
                {isLogin ? (
                    <>
                        <HeaderNotifications />
                        <ProfileDropDown />
                    </>
                ) : (
                    <>
                        <Link to="/auth/login" className="bg-white px-6 py-2 text-blue-500">
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

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import HeaderNotifications from "./HeaderNotifications";
import HeaderSearch from "./HeaderSearch";
import NewPost from "./NewPost";
import ProfileDropDown from "./ProfileDropDown";
import { GrUserAdmin } from "react-icons/gr";

const HeaderTop = () => {
    const { isLoggin, user } = useAuth();

    return (
        <div className="container flex items-center justify-between py-6">
            <div className="flex items-center gap-2.5">
                <Link to="/" className="h-12">
                    <img src="https://static.virgool.io/images/icon.svg" alt="آیکون ویرگول" className="h-full" />
                </Link>
                <NewPost />
            </div>
            <div className="flex items-center gap-3">
                <HeaderSearch />
                {isLoggin ? (
                    <>
                        <HeaderNotifications />
                        {user?.role === "ADMIN" && (
                            <Link
                                to="/admin"
                                className="relative inline-flex aspect-square w-8 cursor-pointer items-center justify-center"
                            >
                                <GrUserAdmin size={20} />
                            </Link>
                        )}
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

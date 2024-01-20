import axios from "axios";
import propTypes from "prop-types";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getTokenFromLocalStorage } from "../../services/func";
import toast from "react-hot-toast";
import { useProfile } from "../../context/ProfileContext";
import ProfileSocialMedia from "../../components/modules/ProfileSocialMedia";
import { apiRequestsAccess } from "../../services/axios/config";

const UserDetails = () => {
    const { user, followers, followings, isYourProfile } = useProfile();
    const { name } = user;

    const followHandler = () => {
        apiRequestsAccess(`v2/user/follow/${user._id}`)
            .then((res) => {
                if (res.status === 200) {
                    toast.success(`${name} فالو شد`);
                }
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <img src="/public/images/Ana-de-Armas-300x400.jpg" alt="" className="h-20 w-20 rounded-full object-cover" />
            <h1 className="text-2xl">{name}</h1>
            <p className="w-full text-center empty:hidden">{user?.biography}</p>
            <div className="flex gap-10 text-sm text-gray-400">
                <span>
                    توسط <span className="text-black">{followers?.length >= 1 ? followers.length : 0}</span> نفر دنبال
                    می شود
                </span>
                <span>
                    <span className="text-black">{followings?.length >= 1 ? followings.length : 0}</span> نفر را دنبال
                    می کند
                </span>
            </div>
            {isYourProfile ? (
                <Link to="/me/settings" className="profile__btn border-black hover:bg-black hover:text-white">
                    تنظیمات حساب کاربری
                </Link>
            ) : (
                <button
                    className="profile__btn border-blue-500 bg-blue-500 text-white hover:bg-blue-600"
                    onClick={followHandler}
                >
                    دنبال کنید
                </button>
            )}
            <div className="flex gap-3 empty:hidden">
                <ProfileSocialMedia link="https://t.me/" value={user.telegram}>
                    <FaTelegram size={24} />
                </ProfileSocialMedia>
                <ProfileSocialMedia link="https://www.linkedin.com/in/" value={user.linkedin}>
                    <FaLinkedin size={24} />
                </ProfileSocialMedia>
                <ProfileSocialMedia link="https://twitter.com/" value={user.x}>
                    <FaXTwitter size={24} />
                </ProfileSocialMedia>
            </div>
        </div>
    );
};

UserDetails.propTypes = {
    _id: propTypes.string,
    name: propTypes.string,
    biography: propTypes.string,
    telegram: propTypes.string,
    linkedin: propTypes.string,
    x: propTypes.string,
};

export default UserDetails;

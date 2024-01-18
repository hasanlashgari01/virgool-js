import propTypes from "prop-types";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const UserDetails = ({ isYourProfile, name, biography, telegram, linkedin, x }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <img src="/public/images/Ana-de-Armas-300x400.jpg" alt="" className="h-20 w-20 rounded-full object-cover" />
            <h1 className="text-2xl">{name}</h1>
            {biography && <p className="w-full text-center">{biography}</p>}
            {isYourProfile ? (
                <Link to="/me/settings" className="profile__btn border-black hover:bg-black hover:text-white">
                    تنظیمات حساب کاربری
                </Link>
            ) : (
                <button className="profile__btn border-blue-500 bg-blue-500 text-white hover:bg-blue-600">
                    دنبال کنید
                </button>
            )}
            <div className="flex gap-3">
                {telegram && (
                    <Link to={`https://t.me/${telegram}`} target="_blank">
                        <FaTelegram size={24} />
                    </Link>
                )}
                {linkedin && (
                    <Link to={`https://www.instagram.com/${linkedin}`} target="_blank">
                        <FaLinkedin size={24} />
                    </Link>
                )}
                {x && (
                    <Link to={`https://twitter.com/${x}`} target="_blank">
                        <FaXTwitter size={24} />
                    </Link>
                )}
            </div>
        </div>
    );
};

UserDetails.propTypes = {
    isYourProfile: propTypes.bool,
    name: propTypes.string,
    biography: propTypes.string,
    telegram: propTypes.string,
    instagram: propTypes.string,
    x: propTypes.string,
};

export default UserDetails;

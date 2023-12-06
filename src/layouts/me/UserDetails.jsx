import propTypes from "prop-types";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const UserDetails = ({
    isYourProfile = false,
    name,
    biography,
    telegram,
    instagram = "hasan_lshgri",
    x = "HasanLashgari01",
}) => {
    return (
        <div className="flex justify-center items-center flex-col gap-5">
            <img src="/public/images/Ana-de-Armas-300x400.jpg" alt="" className="w-20 h-20 object-cover rounded-full" />
            <h1 className="text-2xl">{name}</h1>
            <p className="w-full text-center">{biography}</p>
            {isYourProfile ? (
                <Link to="/" className="profile__btn hover:bg-black hover:text-white border-black">
                    تنظیمات حساب کاربری
                </Link>
            ) : (
                <button className="profile__btn bg-blue-500 hover:bg-blue-600 text-white border-blue-500">
                    دنبال کنید
                </button>
            )}
            <div className="flex gap-3">
                {telegram && (
                    <Link to={`https://t.me/${telegram}`} target="_blank">
                        <FaTelegram size={24} />
                    </Link>
                )}
                {instagram && (
                    <Link to={`https://www.instagram.com/${instagram}`} target="_blank">
                        <FaInstagram size={24} />
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

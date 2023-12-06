import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaTelegram } from "react-icons/fa";

const UserDetails = ({ name, telegram }) => {
    return (
        <div className="flex justify-center items-center flex-col gap-5">
            <img src="/public/images/Ana-de-Armas-300x400.jpg" alt="" className="w-20 h-20 object-cover rounded-full" />
            <h1 className="text-2xl">{name}</h1>
            <div className="flex gap-3">
                <Link to={`https://t.me/${telegram}`}>
                    <FaTelegram size={24} />
                </Link>
            </div>
        </div>
    );
};

UserDetails.propTypes = {
    name: propTypes.string,
    telegram: propTypes.string,
};

export default UserDetails;

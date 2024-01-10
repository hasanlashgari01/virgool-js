import axios from "axios";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import useDropDown from "../../hooks/useDropDown";
import { getTokenFromLocalStorage } from "../../services/func";
import { getMe } from "../../services/virgoolApi";
import LinkItem from "./LinkItem";
import NewPost from "./NewPost";

const links = [
    { id: 1, link: "me/settings", name: "تنظیمات حساب کاربری" },
    { id: 2, link: "posts/drafts", name: "پست ها و پیش نویس ها" },
    { id: 3, link: "interests", name: "علاقه‌مندی‌های من" },
    { id: 4, link: "likes", name: "پست‌های مورد علاقه من" },
    { id: 5, link: "lists", name: "لیست ها" },
];

const ProfileDropDown = () => {
    const [imgRef, isOpen, openHandler] = useDropDown();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        axios
            .get(getMe(), { headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` } })
            .then((res) => setUser(res.data))
            .catch((err) => err && err.response);
    }, []);

    const changeTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <div className="relative">
            <div className="h-10 w-10 cursor-pointer overflow-hidden rounded-full">
                <img
                    src={user.avatar ? user.avatar : "/public/images/Ana-de-Armas-300x400.jpg"}
                    alt="عکس پروفایل"
                    onClick={openHandler}
                    ref={imgRef}
                />
            </div>
            {isOpen && (
                <ul className="child:dropdown-border absolute left-0 top-14 w-72 rounded-md bg-white px-3 shadow-drop">
                    <div>
                        <h4>{user.name}</h4>
                        <LinkItem to={`/me/@${user.username}`} name="مشاهده پروفایل" classN="text-gray-700" />
                    </div>
                    <div className="child:py-1">
                        <NewPost />
                        {links.map(({ id, link, name }) => (
                            <LinkItem key={id} to={`/${link}`} name={name} />
                        ))}
                    </div>
                    <div>
                        <LinkItem to="/me/publications" name="انتشارات" />
                    </div>
                    <div className="flex cursor-pointer select-none items-center justify-between" onClick={changeTheme}>
                        <span>حالت {isDarkMode ? "شب" : "روز"}</span>
                        {isDarkMode ? <BsMoon /> : <BsSun />}
                    </div>
                    <div>
                        <LinkItem to="/logout" name="خروج" />
                    </div>
                </ul>
            )}
        </div>
    );
};

export default ProfileDropDown;

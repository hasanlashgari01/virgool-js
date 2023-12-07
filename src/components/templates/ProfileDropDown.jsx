import { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import useDropDown from "../../hooks/useDropDown";
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

    const changeTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <div className="relative">
            <div className="w-10 h-10 overflow-hidden rounded-full cursor-pointer">
                <img
                    src="/public/images/Ana-de-Armas-300x400.jpg"
                    alt="عکس پروفایل"
                    onClick={openHandler}
                    ref={imgRef}
                />
            </div>
            {isOpen && (
                <ul className="absolute bg-white w-72 top-14 left-0 px-3 rounded-md shadow-drop child:dropdown-border">
                    <div>
                        <h4>حسن لشکری</h4>
                        <LinkItem to={`me/@hasan`} name="مشاهده پروفایل" classN="text-gray-700" />
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
                    <div className="flex justify-between items-center cursor-pointer select-none" onClick={changeTheme}>
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

import { useState } from "react";
import toast from "react-hot-toast";
import { BsMoon, BsSun } from "react-icons/bs";
import { useAuth } from "../../context/AuthContext";
import useDropDown from "../../hooks/useDropDown";
import { apiRequestsAccess } from "../../services/axios/config";
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
    const { user, logout } = useAuth();
    const [theme, setTheme] = useState(user?.themeMode);
    const [imgRef, isOpen, setIsOpen] = useDropDown();

    const openHandler = () => setIsOpen(!isOpen);

    const themeHandler = () => {
        setTheme(theme === "LIGHT" ? "DARK" : "LIGHT");
        apiRequestsAccess
            .put("v1/user/me/settings", { themeMode: theme })
            .then((res) => {
                if (res.status == 201) {
                    toast.success("اطلاعات به روز شد.");
                }
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            });
    };

    return (
        <div className="relative">
            <div className="h-10 w-10 cursor-pointer overflow-hidden rounded-full">
                <img
                    src={user?.avatar ? user?.avatar : "/public/images/Ana-de-Armas-300x400.jpg"}
                    alt="عکس پروفایل"
                    onClick={openHandler}
                    ref={imgRef}
                />
            </div>
            {isOpen && (
                <ul className="child:dropdown-border absolute left-0 top-14 w-72 rounded-md bg-white px-3 shadow-drop">
                    <div>
                        <h4>{user?.name}</h4>
                        <LinkItem to={`/@${user?.username}`} name="مشاهده پروفایل" classN="text-gray-700" />
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
                    {user?.themeStatus == 1 && (
                        <div
                            className="flex cursor-pointer select-none items-center justify-between"
                            onClick={() => themeHandler()}
                        >
                            <span>حالت {theme === "LIGHT" ? "شب" : "روز"}</span>
                            {theme === "LIGHT" ? <BsMoon /> : <BsSun />}
                        </div>
                    )}
                    <div className="cursor-pointer" onClick={() => logout()}>
                        خروج
                    </div>
                </ul>
            )}
        </div>
    );
};

export default ProfileDropDown;

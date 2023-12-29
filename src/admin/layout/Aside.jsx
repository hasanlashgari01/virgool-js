import { FaRegComment } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { IoHomeOutline, IoImagesOutline } from "react-icons/io5";
import { LuUserX } from "react-icons/lu";
import { TbCategory } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Aside = () => {
    return (
        <nav className="tabs">
            <NavLink to="index" className="admin__nav__tab">
                <span className="admin__nav__tab--text">صفحه اصلی</span>
                <IoHomeOutline size={24} className="admin__nav__tab--icon" />
            </NavLink>
            <NavLink to="topics" className="admin__nav__tab">
                <span className="admin__nav__tab--text">دسته بندی ها</span>
                <TbCategory size={24} className="admin__nav__tab--icon" />
            </NavLink>
            <NavLink to="posts" className="admin__nav__tab">
                <span className="admin__nav__tab--text">پست ها</span>
                <IoImagesOutline size={24} className="admin__nav__tab--icon" />
            </NavLink>
            <NavLink to="comments" className="admin__nav__tab">
                <span className="admin__nav__tab--text">نظرات</span>
                <FaRegComment size={24} className="admin__nav__tab--icon" />
            </NavLink>
            <NavLink to="users" className="admin__nav__tab">
                <span className="admin__nav__tab--text">کاربران</span>
                <FiUsers size={24} className="admin__nav__tab--icon" />
            </NavLink>
            <NavLink to="ban-user" className="admin__nav__tab">
                <span className="admin__nav__tab--text">کاربران بن شده</span>
                <LuUserX size={24} className="admin__nav__tab--icon" />
            </NavLink>
        </nav>
    );
};

export default Aside;

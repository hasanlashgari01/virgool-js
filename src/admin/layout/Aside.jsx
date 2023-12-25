import { NavLink } from "react-router-dom";

const Aside = () => {
    return (
        <nav className="tabs sticky top-0 h-fit basis-52 flex-col rounded-xl border-2 bg-slate-50/80 p-5">
            <NavLink to="index" className="admin__nav__tab">
                صفحه اصلی
            </NavLink>
            <NavLink to="topics" className="admin__nav__tab">
                دسته بندی ها
            </NavLink>
            <NavLink to="posts" className="admin__nav__tab">
                پست ها
            </NavLink>
            <NavLink to="comments" className="admin__nav__tab">
                نظرات
            </NavLink>
            <NavLink to="users" className="admin__nav__tab">
                کاربران
            </NavLink>
            <NavLink to="ban-user" className="admin__nav__tab">
                کاربران بن شده
            </NavLink>
        </nav>
    );
};

export default Aside;

import { NavLink } from "react-router-dom";

const links = [
    { id: 1, title: "پست ها", href: "posts" },
    { id: 2, title: "لیست ها", href: "lists" },
    { id: 3, title: "انتشارات", href: "publications" },
];

const Navigation = () => {
    return (
        <div className="flex gap-5 mt-5">
            {links.map(({ id, title, href }) => (
                <NavLink key={id} to={href} className="profile__tab">
                    {title}
                </NavLink>
            ))}
        </div>
    );
};

export default Navigation;

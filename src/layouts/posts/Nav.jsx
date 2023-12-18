import { NavLink } from "react-router-dom";
import NewPost from "../../components/templates/NewPost";

const items = [
    { id: 1, link: "drafts", name: "پیش‌نویس‌ها" },
    { id: 2, link: "published", name: "پست‌های منتشر شده" },
];

const Header = () => {
    return (
        <div className="mt-10">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">پست های شما</h2>
                <NewPost classes="text-sm py-2 px-4 border border-current rounded-md" />
            </div>
            <nav className="mt-5">
                <ul className="tabs">
                    {items.map(({ id, link, name }) => (
                        <NavLink key={id} to={link}>
                            {name}
                        </NavLink>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Header;

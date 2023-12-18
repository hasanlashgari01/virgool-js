import { NavLink } from "react-router-dom";
import NewPost from "../../components/templates/NewPost";
import { usePosts } from "../../context/PostsContext";

const items = [
    { id: 1, link: "drafts", name: "پیش‌نویس‌ها" },
    { id: 2, link: "published", name: "پست‌های منتشر شده" },
];

const Header = () => {
    const [posts] = usePosts();

    let { draftPosts, publishPosts } = posts;

    return (
        <div className="mt-10">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">پست های شما</h2>
                <NewPost classes="text-sm py-2 px-4 border border-current rounded-md" />
            </div>
            <nav className="mt-5">
                <ul className="tabs">
                    <NavLink to="drafts" className="tab">
                        <span>پیش‌نویس‌ها</span>
                        <span>{draftPosts.length}</span>
                    </NavLink>
                    <NavLink to="published" className="tab">
                        <span>پست‌های منتشر شده</span>
                        <span>{publishPosts.length}</span>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;

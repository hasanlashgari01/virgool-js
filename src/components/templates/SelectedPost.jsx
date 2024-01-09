import { Link } from "react-router-dom";
import propTypes from "prop-types";
import HeartIcon from "../../assets/heart.svg";
import BookmarkIcon from "../../assets/bookmark.svg";

let options = { month: "long", day: "numeric" };

const SelectedPost = ({ isTopic = false, _id, title, description, createdAt, author, topicID }) => {
    const dt = new Date(createdAt);

    return (
        <div className="flex flex-col-reverse gap-6 sm:flex-row">
            <div className="flex-1">
                <div className="flex items-center">
                    <span>{author?.name}</span>
                    <span className="post__badge mr-5">{dt.toLocaleDateString("fa-IR", options)}</span>
                </div>
                <div className="mt-3 space-y-1">
                    <Link className="line-clamp-1 font-IRYekanBold" to={`/post/${_id}`}>
                        {title}
                    </Link>
                    <p className="line-clamp-2 font-IRYekanRegular text-sm text-gray-450">{description}</p>
                </div>
                <div className="mt-6 flex justify-between sm:ml-10">
                    {isTopic ? (
                        <div></div>
                    ) : (
                        <Link className="post__badge" to={`/topic/${topicID.href}`}>
                            {topicID.name}
                        </Link>
                    )}
                    <div className={`flex gap-3 ${isTopic && "self-end"}`}>
                        <img className="aspect-square w-6 cursor-pointer fill-red-500" src={HeartIcon} alt="" />
                        <img className="aspect-square w-6 cursor-pointer fill-red-500" src={BookmarkIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className="flex h-48 w-full justify-center bg-slate-300 sm:h-40 sm:w-40">
                <img
                    src="https://files.virgool.io/upload/users/6233/posts/q8tydiky1pix/0kxuhkbswb91.jpg?width=700?width=850"
                    alt=""
                    className="h-full w-full rounded-lg sm:object-cover"
                />
            </div>
        </div>
    );
};

SelectedPost.propTypes = {
    isTopic: propTypes.any,
    _id: propTypes.string,
    title: propTypes.string,
    description: propTypes.string,
    createdAt: propTypes.string,
    author: propTypes.object,
    topicID: propTypes.any,
};

export default SelectedPost;

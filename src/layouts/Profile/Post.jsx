import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = ({ _id, title, description, topicID }) => {
    return (
        <div className="flex sm:flex-row xl:w-3/4 gap-6">
            <div className="flex-1">
                <div className="flex items-center">
                    {/* <span className="post__badge mr-5">{dt.toLocaleDateString("fa-IR", options)}</span> */}
                </div>
                <div className="mt-3 space-y-1">
                    <Link className="font-IRYekanBold line-clamp-1" to={`/post/${_id}`}>
                        {title}
                    </Link>
                    <p className="font-IRYekanRegular text-sm line-clamp-2 text-gray-450">{description}</p>
                </div>
                <div className="flex justify-between sm:ml-10 mt-6">
                    <Link className="post__badge" to={`/topic/${topicID.href}`}>
                        {topicID.name}
                    </Link>
                </div>
            </div>
            <div className="w-20 sm:w-36 sm:aspect-square bg-slate-300 flex justify-center">
                <img
                    src="https://files.virgool.io/upload/users/6233/posts/q8tydiky1pix/0kxuhkbswb91.jpg?width=700?width=850"
                    alt=""
                    className="w-full object-cover rounded-lg"
                />
            </div>
        </div>
    );
};

Post.propTypes = {
    isTopic: propTypes.any,
    _id: propTypes.string,
    title: propTypes.string,
    description: propTypes.string,
    createdAt: propTypes.string,
    author: propTypes.object,
    topicID: propTypes.any,
};

export default Post;

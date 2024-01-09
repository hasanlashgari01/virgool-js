import propTypes from "prop-types";
import PostOverview from "./PostOverview";

const PostBox = ({ title, subTitle, posts }) => {
    return (
        <div className="rounded-md bg-stone-100 shadow-sm">
            <div className="grid gap-1 rounded-md bg-slate-900/90 p-5">
                <h2 className="box__title text-white">{title}</h2>
                {subTitle && <h4 className="text-xs text-gray-200">{subTitle}</h4>}
            </div>
            <ul className="my-6 inline-grid gap-5 px-5">
                {posts.slice(0, 4).map(({ _id, title, author }) => (
                    <PostOverview key={_id} title={title} name={author?.name} />
                ))}
            </ul>
        </div>
    );
};

PostBox.propTypes = {
    title: propTypes.string,
    subTitle: propTypes.string,
    posts: propTypes.array,
};

export default PostBox;

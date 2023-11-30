import { Link } from "react-router-dom";
import propTypes from "prop-types";
import HeartIcon from "../../assets/heart.svg";
import BookmarkIcon from "../../assets/bookmark.svg";

let options = { month: "long", day: "numeric" };

const SelectedPost = ({ title, description, createdAt, author, topicID }) => {
	const dt = new Date(createdAt);

	return (
		<div className="flex flex-col-reverse sm:flex-row gap-6">
			<div className="flex-1">
				<div className="flex items-center">
					<span>{author.name}</span>
					<span className="post__badge mr-5">{dt.toLocaleDateString("fa-IR", options)}</span>
				</div>
				<div className="mt-3 space-y-1">
					<h3 className="font-IRYekanBold line-clamp-1">{title}</h3>
					<p className="font-IRYekanRegular text-sm line-clamp-2">{description}</p>
				</div>
				<div className="flex justify-between sm:ml-10 mt-6">
					<Link className="post__badge" to={topicID.href}>
						{topicID.name}
					</Link>
					<div className="flex gap-3">
						<img className="w-6 aspect-square cursor-pointer fill-red-500" src={HeartIcon} alt="" />
						<img className="w-6 aspect-square cursor-pointer fill-red-500" src={BookmarkIcon} alt="" />
					</div>
				</div>
			</div>
			<div className="w-full sm:w-40 h-48 sm:h-40 bg-slate-300 flex justify-center">
				<img
					src="https://files.virgool.io/upload/users/6233/posts/q8tydiky1pix/0kxuhkbswb91.jpg?width=700?width=850"
					alt=""
					className="w-full h-full sm:object-cover rounded-lg"
				/>
			</div>
		</div>
	);
};

SelectedPost.propTypes = {
	title: propTypes.string,
	description: propTypes.string,
	createdAt: propTypes.string,
	author: propTypes.object,
	topicID: propTypes.object,
};

export default SelectedPost;

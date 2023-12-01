import { Link } from "react-router-dom";
import propTypes from "prop-types";

const PostOverview = ({ title, name }) => {
	return (
		<div className="flex gap-2 items-center">
			<img
				src="https://files.virgool.io/upload/users/136448/avatar/8TG6HM.jpeg?height=120&width=120"
				alt=""
				className="w-9 h-9 rounded-full"
			/>
			<div className="grid gap-0.5 text-sm">
				<Link className="font-IRYekanMedium line-clamp-1">{title}</Link>
				<Link className="text-gray-450 line-clamp-1">{name}</Link>
			</div>
		</div>
	);
};

PostOverview.propTypes = {
	title: propTypes.string,
	name: propTypes.string,
};

export default PostOverview;

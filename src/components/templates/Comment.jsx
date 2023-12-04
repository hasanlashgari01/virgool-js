import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { toDate } from "../../services/func";

const Comment = ({ _id, body, createdAt, author }) => {
	return (
		<div key={_id}>
			<div className="flex gap-3 items-center">
				<img
					src="https://files.virgool.io/upload/users/136448/avatar/8TG6HM.jpeg?height=120&width=120"
					alt=""
					className="w-9 h-9 rounded-full"
				/>
				<div className="grid gap-0.5">
					<Link to={`/${author.username}`} className="font-IRYekanBold">
						{author.name}
					</Link>
					<Link className="text-gray-450 text-sm">{toDate(createdAt)}</Link>
				</div>
			</div>
			<div>
				<p>{body}</p>
			</div>
		</div>
	);
};

Comment.propTypes = {
	_id: propTypes.string,
	createdAt: propTypes.string,
	body: propTypes.string,
	author: propTypes.object,
};

export default Comment;

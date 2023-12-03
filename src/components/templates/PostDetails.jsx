import propTypes from "prop-types";

const PostDetails = ({ post }) => {
	return (
		<>
			<div>
				<img src="" alt="" />
				<div>
					<h4>{post.author && post.author.name}</h4>
					<h5>
						<span>۱۲ دقیقه</span> - <span>۱۳ روز پیش</span>
					</h5>
				</div>
			</div>
			<hr />
			<div>
				<h1 className="text-2xl tb:text-3xl font-IRYekanBold">{post.title}</h1>
				<p>{post && post.body}</p>
			</div>
			<hr />
		</>
	);
};

PostDetails.propTypes = {
	post: propTypes.any,
};

export default PostDetails;

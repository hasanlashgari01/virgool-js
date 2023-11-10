import { Link } from "react-router-dom";

const NewPost = () => {
	return (
		<Link to="/post/create" className="inline-block text-blue-400 hover:text-blue-500">
			نوشتن پست جدید
		</Link>
	);
};

export default NewPost;

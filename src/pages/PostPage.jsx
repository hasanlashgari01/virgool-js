import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../services/virgoolApi";
import PostDetails from "../components/templates/PostDetails";
import Comment from "../components/templates/Comment";

const PostPage = () => {
	const { postId } = useParams();
	const [post, setPost] = useState([]);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		axios.get(`${BASE_URL}v1/post/${postId}`).then(({ data }) => {
			setPost(data.post);
			setComments(data.comments);
		});
	}, []);

	return (
		<div>
			<main>
				<PostDetails post={post} />
				<ul>
					{comments.map((comment) => (
						<Comment key={comment._id} {...comment} />
					))}
				</ul>
			</main>
			<aside></aside>
		</div>
	);
};

export default PostPage;

import propTypes from "prop-types";
import useGetAxios from "../../hooks/useGetAxios";
import SelectedPost from "./SelectedPost";
import Title from "./Title";

const SelectedPosts = ({ title, className }) => {
	const [data] = useGetAxios({ url: "v1/post" });

	return (
		<>
			<Title text={title} />
			<div className={`grid grid-cols-1 mb-10 ${className}`}>
				{data.slice(0, 4).map((post) => (
					<SelectedPost key={post._id} {...post} />
				))}
			</div>
		</>
	);
};

SelectedPosts.propTypes = {
	title: propTypes.string,
	className: propTypes.string,
};

export default SelectedPosts;

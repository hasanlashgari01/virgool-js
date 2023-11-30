import useGetAxios from "../../hooks/useGetAxios";
import SelectedPost from "./SelectedPost";
import Title from "./Title";

const SelectedPosts = () => {
	const [data] = useGetAxios({ url: "v1/post" });

	console.log(data[0]);

	return (
		<>
			<Title text="منتخب‌های ویرگول" />
			<div className="grid grid-cols-1 tb:grid-cols-2 gap-5">
				{data.slice(0, 4).map((post) => (
					<SelectedPost key={post._id} {...post} />
				))}
			</div>
		</>
	);
};

export default SelectedPosts;

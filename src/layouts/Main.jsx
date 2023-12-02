import SelectedPosts from "../components/templates/SelectedPosts";

const Main = () => {
	return (
		<div className="max-tb:flex-1 tb:w-2/3">
			<SelectedPosts title="پست های اخیر" className="gap-5" />
		</div>
	);
};

export default Main;

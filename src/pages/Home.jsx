import SelectedPosts from "../components/templates/SelectedPosts";
import Aside from "../layouts/Aside";
import Header from "../layouts/Header";
import Main from "../layouts/Main";

const Home = () => {
	return (
		<>
			<Header />
			<main className="container">
				<SelectedPosts />
				<hr />
				<div className="flex mt-16 mb-96">
					<Main />
					<Aside />
				</div>
			</main>
		</>
	);
};

export default Home;

import SelectedPosts from "../components/templates/SelectedPosts";
import Aside from "../layouts/Aside";
import Header from "../layouts/Header";

const Home = () => {
	return (
		<>
			<Header />
			<main className="container">
				<SelectedPosts />
				<hr />
				<div>
					<Aside />
				</div>
			</main>
		</>
	);
};

export default Home;

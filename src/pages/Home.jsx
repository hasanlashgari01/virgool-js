import SelectedPosts from "../components/templates/SelectedPosts";
import Header from "../layouts/Header";

const Home = () => {
	return (
		<>
			<Header />
			<main className="container">
				<SelectedPosts />
				<hr />
			</main>
		</>
	);
};

export default Home;

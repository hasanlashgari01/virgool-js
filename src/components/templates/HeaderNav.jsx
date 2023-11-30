import { useEffect, useState } from "react";
import LinkItem from "./LinkItem";
import PropTypes from "prop-types";
import { BASE_URL } from "../../services/virgoolApi";

const HeaderNav = ({ isLogin }) => {
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		getTopics();
	}, []);

	const getTopics = async () => {
		const res = await fetch(`${BASE_URL}v1/topic`);
		const topics = await res.json();

		const shuffledTopics = topics.sort((a, b) => 0.5 - Math.random());

		setTopics(shuffledTopics);
	};

	return (
		<nav className={`${isLogin ? "bg-blue-500 text-white/90 hover:text-white" : "bg-transparent text-black/100"}`}>
			<ul className="container flex gap-5 py-4 text-sm">
				<LinkItem to="http://localhost:5173" name="صفحه اصلی" />
				{topics.map(({ _id, href, name }) => (
					<LinkItem key={_id} to={href} name={name} />
				))}
			</ul>
		</nav>
	);
};

HeaderNav.propTypes = {
	items: PropTypes.array,
	isLogin: PropTypes.bool,
};

export default HeaderNav;

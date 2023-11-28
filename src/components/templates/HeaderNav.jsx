import LinkItem from "./LinkItem";
import PropTypes from "prop-types";

const HeaderNav = ({ items, isLogin }) => {
	return (
		<nav className={`${isLogin ? "bg-blue-500 text-white/90 hover:text-white" : "bg-transparent text-black/100"}`}>
			<ul className="container flex gap-5 py-4 text-sm">
				{items.map(({ id, link, name }) => (
					<LinkItem classN="" key={id} to={link} name={name} />
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

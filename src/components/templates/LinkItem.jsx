import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LinkItem = ({ to, name }) => {
	return (
		<li>
			<Link to={to}>{name}</Link>
		</li>
	);
};

LinkItem.propTypes = {
	to: PropTypes.string,
	name: PropTypes.string,
};

export default LinkItem;

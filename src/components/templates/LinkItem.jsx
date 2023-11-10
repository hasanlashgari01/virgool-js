import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LinkItem = ({ to, name, classN = "" }) => {
	return (
		<li>
			<Link to={to} className={classN}>
				{name}
			</Link>
		</li>
	);
};

LinkItem.propTypes = {
	to: PropTypes.string,
	name: PropTypes.string,
	classN: PropTypes.string,
};

export default LinkItem;

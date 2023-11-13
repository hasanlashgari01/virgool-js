import PropTypes from "prop-types";

const MsgBox = ({ msg }) => {
	return (
		<div className="absolute top-full w-full sm:w-96 text-xs text-red-600 font-IRYekanBold mt-1 pr-2">{msg}</div>
	);
};

MsgBox.propTypes = {
	status: PropTypes.string,
	msg: PropTypes.string,
};

export default MsgBox;

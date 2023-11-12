import PropTypes from "prop-types";

const MsgBox = ({ status, msg }) => {
	return (
		<div
			className={`grid place-items-center fixed top-10 right-1/2 translate-x-1/2 w-96 h-16 text-white rounded-lg 
            ${status === "success" && "bg-green-500"} 
            ${status === "error" && "bg-red-500"} 
            ${status === "warning" && "bg-yellow-500"}`}
		>
			{msg}
		</div>
	);
};

MsgBox.propTypes = {
	status: PropTypes.string,
	msg: PropTypes.string,
};

export default MsgBox;

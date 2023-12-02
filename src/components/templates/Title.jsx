import propTypes from "prop-types";

const Title = ({ text }) => {
	return (
		<div className="flex items-baseline gap-5">
			<span className="inline-block w-3.5 h-3.5 bg-sky-500 rounded-sm"></span>
			<span className="mb-5 text-xl tb:text-3xl font-DanaDemiBold">{text}</span>
		</div>
	);
};

Title.propTypes = {
	text: propTypes.string,
};

export default Title;

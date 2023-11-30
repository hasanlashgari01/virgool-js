import propTypes from "prop-types";

const Title = ({ text }) => {
	return <h2 className="my-5 text-xl tb:text-2xl font-IRYekanBold">{text}</h2>;
};

Title.propTypes = {
	text: propTypes.string,
};

export default Title;

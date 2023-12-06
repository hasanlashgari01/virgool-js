import propTypes from "prop-types";

const ErrorMsg = ({ msg }) => {
    return <h1 className="py-8 text-center text-3xl bg-red-600 text-white font-IRYekanBold rounded-lg">{msg}</h1>;
};

ErrorMsg.propTypes = {
    msg: propTypes.string,
};

export default ErrorMsg;

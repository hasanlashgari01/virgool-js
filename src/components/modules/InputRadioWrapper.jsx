import propTypes from "prop-types";

const InputRadioWrapper = ({ title, children }) => {
    return (
        <div className="flex justify-between mt-10">
            <h3 className="text-lg lg:text-xl font-DanaDemiBold">{title}</h3>
            <div className="flex gap-x-4">{children}</div>
        </div>
    );
};

InputRadioWrapper.propTypes = {
    title: propTypes.string,
    children: propTypes.array,
};

export default InputRadioWrapper;

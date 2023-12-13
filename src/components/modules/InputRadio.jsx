import propTypes from "prop-types";

const InputRadio = ({ id, name }) => {
    return (
        <label htmlFor={id} className="flex justify-evenly items-center h-fit gap-2 peer-checked:ring-red-500">
            <input type="radio" name="gender" id={id} value={name} />
            <span className="peer-checked:ring-red-500">{name}</span>
        </label>
    );
};

InputRadio.propTypes = {
    id: propTypes.string,
    name: propTypes.string,
};

export default InputRadio;

import propTypes from "prop-types";

const InputRadio = ({ id, name, type }) => {
    return (
        <label htmlFor={id} className="flex h-fit items-center justify-evenly gap-2 peer-checked:ring-red-500">
            <input type="radio" name={type} id={id} value={name} />
            <span className="peer-checked:ring-red-500">{name}</span>
        </label>
    );
};

InputRadio.propTypes = {
    id: propTypes.any,
    name: propTypes.string,
    type: propTypes.string,
};

export default InputRadio;

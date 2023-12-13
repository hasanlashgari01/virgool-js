import propTypes from "prop-types";
import { IoCameraOutline } from "react-icons/io5";

const Input = ({ type, htmlFor, isShow, userDetails, setUserDetails, inputRef }) => {
    return (
        <label
            htmlFor={htmlFor}
            className={
                type === "file"
                    ? "relative cursor-pointer w-20 h-20 overflow-hidden bg-slate-300 rounded-full"
                    : "w-80 cursor-text"
            }
        >
            {type === "file" && <IoCameraOutline className="absolute p-5 w-full h-full aspect-square" />}
            <input
                id={htmlFor}
                type={type}
                className={
                    type === "file"
                        ? "w-full file:hidden invisible"
                        : "w-full border-b bg-transparent py-3 cursor-text outline-none"
                }
                disabled={!isShow && true}
                value={userDetails}
                onChange={(e) => setUserDetails({ ...userDetails, userDetails: e.target.value })}
                ref={inputRef}
            />
        </label>
    );
};

Input.propTypes = {
    type: propTypes.string,
    htmlFor: propTypes.string,
    isShow: propTypes.bool,
    userDetails: propTypes.any,
    setUserDetails: propTypes.func,
    description: propTypes.string,
    inputRef: propTypes.object,
};

export default Input;

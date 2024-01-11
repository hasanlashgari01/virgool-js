import propTypes from "prop-types";
import { IoCameraOutline } from "react-icons/io5";

const Input = ({ type, htmlFor, inputValue, inputRef, placeholder, dir }) => {
    return (
        <label
            htmlFor={htmlFor}
            className={
                type === "file"
                    ? "relative h-20 w-20 cursor-pointer overflow-hidden rounded-full bg-slate-300"
                    : "w-80 cursor-text"
            }
        >
            {type === "file" && <IoCameraOutline className="absolute aspect-square h-full w-full p-5" />}
            <input
                id={htmlFor}
                type={type}
                placeholder={placeholder}
                className={
                    type === "file"
                        ? "invisible w-full file:hidden"
                        : "w-full cursor-text border-b bg-transparent py-3 outline-none"
                }
                dir={dir ? "ltr" : "trl"}
                value={inputValue}
                // onChange={(e) => changeHandler(e, inputField)}
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
    placeholder: propTypes.string,
    inputRef: propTypes.object,
    dir: propTypes.bool,
};

export default Input;

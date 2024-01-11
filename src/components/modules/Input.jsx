import propTypes from "prop-types";
import { IoCameraOutline } from "react-icons/io5";

const Input = ({ value, setValue, type, htmlFor, isShow, userDetails, setUserDetails, inputRef, placeholder, dir }) => {
    const changeHandler = (e, type) => {
        setUserDetails({ ...userDetails, [type]: e.target.value });
        // console.log(Object.keys(userDetails));
        // setValue(userDetails)
    };

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
                className={
                    type === "file"
                        ? "invisible w-full file:hidden"
                        : "w-full cursor-text border-b bg-transparent py-3 outline-none"
                }
                dir={dir ? "ltr" : "trl"}
                disabled={!isShow && true}
                value={userDetails}
                onChange={(e) => changeHandler(e, type)}
                ref={inputRef}
                placeholder={placeholder}
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

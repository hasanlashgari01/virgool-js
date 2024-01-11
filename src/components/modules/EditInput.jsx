import { useRef, useState } from "react";
// import EditButton from "./EditButton";
import propTypes from "prop-types";
import Input from "./Input";

const EditInput = ({ image, inputField, user, setUserDetails, title, description, dir }) => {
    const [inputValue, setInputValue] = useState("");
    const [isShow, setIsShow] = useState(false);

    const inputRef = useRef();

    return (
        <div className="flex items-end justify-between gap-5">
            <div className="flex w-2/3 flex-col">
                {title && <h3 className="font-DanaDemiBold text-lg lg:text-xl">{title}</h3>}
                {image && isShow && (
                    <Input
                        type="file"
                        isShow={isShow}
                        userDetails={user}
                        setUserDetails={setUserDetails}
                        description={description}
                        inputRef={inputRef}
                    />
                )}
                {!image && (
                    <Input
                        type="text"
                        isShow={isShow}
                        setUserDetails={setUserDetails}
                        description={description}
                        inputRef={inputRef}
                        dir={dir}
                        inputField={inputField}
                        inputValue={user}
                        setValue={setInputValue}
                    />
                )}
                {image && !isShow && <img src={image} className="h-20 w-20 rounded-full object-cover" />}
                {description && <h6 className="mt-3 text-sm text-gray-500">{description}</h6>}
            </div>
            {/* <EditButton
                setIsSave={setIsSave}
                userDetails={userDetails}
                isShow={isShow}
                setIsShow={setIsShow}
                btnHandler={btnHandler}
            /> */}
        </div>
    );
};

EditInput.propTypes = {
    image: propTypes.string,
    user: propTypes.any,
    setUserDetails: propTypes.func,
    title: propTypes.string,
    description: propTypes.string,
    dir: propTypes.bool,
    inputField: propTypes.string,
};

export default EditInput;

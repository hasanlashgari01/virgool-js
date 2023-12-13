import { useEffect, useRef, useState } from "react";
import EditButton from "./EditButton";
import propTypes from "prop-types";
import Input from "./Input";

const EditInput = ({ image, userDetails, setUserDetails, description }) => {
    const [isShow, setIsShow] = useState(false);
    const [focus, setFocus] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        isShow && inputRef.current.focus();
        !isShow && setFocus(false);
    }, [isShow]);

    const btnHandler = () => {
        setIsShow(true);
        setFocus(true);
    };

    return (
        <>
            <div className="flex justify-between gap-5">
                <div className="flex flex-col w-2/3 h-auto">
                    {image && isShow && (
                        <Input
                            type="file"
                            isShow={isShow}
                            userDetails={userDetails}
                            setUserDetails={setUserDetails}
                            description={description}
                            inputRef={inputRef}
                        />
                    )}
                    {!image && (
                        <Input
                            type="text"
                            isShow={isShow}
                            userDetails={userDetails}
                            setUserDetails={setUserDetails}
                            description={description}
                            inputRef={inputRef}
                        />
                    )}
                    {image && !isShow && <img src={image} className="w-20 h-20 object-cover rounded-full" />}
                    {description && <h6 className="mt-3 text-gray-500 text-sm">{description}</h6>}
                </div>
                <EditButton isShow={isShow} setIsShow={setIsShow} btnHandler={btnHandler} />
            </div>
        </>
    );
};

EditInput.propTypes = {
    image: propTypes.string,
    userDetails: propTypes.any,
    setUserDetails: propTypes.func,
    description: propTypes.string,
};

export default EditInput;

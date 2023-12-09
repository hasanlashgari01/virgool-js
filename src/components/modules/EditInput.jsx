import { useEffect, useRef, useState } from "react";
import EditButton from "./EditButton";
import propTypes from "prop-types";

const EditInput = ({ userDetails, setUserDetails, description }) => {
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
        <div>
            <div className="flex justify-between items-center">
                <input
                    type="text"
                    className="border-b"
                    disabled={!isShow && true}
                    value={userDetails}
                    onChange={(e) => setUserDetails({ ...userDetails, userDetails: e.target.value })}
                    ref={inputRef}
                />
                <EditButton isShow={isShow} setIsShow={setIsShow} btnHandler={btnHandler} />
            </div>
            <h6>{description}</h6>
        </div>
    );
};

EditInput.propTypes = {
    userDetails: propTypes.any,
    setUserDetails: propTypes.func,
    description: propTypes.string,
};

export default EditInput;

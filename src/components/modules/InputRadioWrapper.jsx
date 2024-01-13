import axios from "axios";
import propTypes from "prop-types";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { getTokenFromLocalStorage } from "../../services/func";
import { BASE_URL } from "../../services/virgoolApi";

const InputRadioWrapper = ({ value, title, type, children }) => {
    const parentValueRef = useRef();

    useEffect(() => {
        if (value) {
            Array.from(parentValueRef.current.children).forEach((elem) => {
                if (elem.firstElementChild.id == value) {
                    elem.firstElementChild.checked = true;
                }
            });
        }
    }, [value]);

    const changeHandler = (e) => {
        let value = e.target.id.toUpperCase();

        axios
            .put(
                `${BASE_URL}v1/user/me/settings`,
                { [type]: value },
                { headers: { Authorization: `Bearer ${getTokenFromLocalStorage().token}` } },
            )
            .then((res) => {
                if (res.status == 201) {
                    toast.success("اطلاعات به روز شد.");
                }
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            });
    };

    return (
        <div className="mt-10 flex justify-between">
            <h3 className="font-DanaDemiBold text-lg lg:text-xl">{title}</h3>
            <div className="flex gap-x-4" ref={parentValueRef} onChange={(e) => changeHandler(e)}>
                {children}
            </div>
        </div>
    );
};

InputRadioWrapper.propTypes = {
    title: propTypes.string,
    children: propTypes.array,
    type: propTypes.string,
    value: propTypes.string,
};

export default InputRadioWrapper;

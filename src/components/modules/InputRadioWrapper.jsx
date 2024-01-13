import axios from "axios";
import propTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { getTokenFromLocalStorage } from "../../services/func";
import { BASE_URL, getUser } from "../../services/virgoolApi";
import toast from "react-hot-toast";

const InputRadioWrapper = ({ title, children }) => {
    const [value, setValue] = useState();

    const parentValueRef = useRef();

    useEffect(() => {
        axios
            .get(getUser(), {
                headers: { Authorization: `Bearer ${getTokenFromLocalStorage().token}` },
            })
            .then((res) => {
                // console.log(res.data);
                setValue(res.data.gender.toLowerCase());
            });
    }, []);

    useEffect(() => {
        Array.from(parentValueRef.current.children).forEach((elem) => {
            if (elem.firstElementChild.id == value) {
                elem.firstElementChild.checked = true;
            }
        });
    }, [value]);

    const changeHandler = (e) => {
        let value = e.target.id.toUpperCase();

        axios
            .put(
                `${BASE_URL}v1/user/me/settings`,
                { gender: value },
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
};

export default InputRadioWrapper;

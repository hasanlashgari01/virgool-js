import axios from "axios";
import PropTypes from "prop-types";
import { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { TOKEN_ADMIN, authFetch } from "../../services/virgoolApi";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { RiCloseCircleFill } from "react-icons/ri";

const OtpModal = ({ identifier, isRegisterPage, setIsShowModal }) => {
    const { loginHandler } = useContext(AuthContext);
    const navigate = useNavigate();
    const [data, setData] = useState({ identifier, code: "" });
    const formRef = useRef();
    let status = isRegisterPage ? "register" : "login";
    let numbers = [];

    const changeHandler = (e) => {
        let value = e.target.value;
        let nextElem = e.target.nextElementSibling;

        if (value.length == 1) {
            // if nextElement exist, focus nextElement
            nextElem && nextElem.focus();
        } else if (value.length > 1) {
            // if element value > 1 clear other numbers and focus nextElement
            e.target.value = value.slice(0, 1);
            nextElem && nextElem.focus();
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // get inputs value and pust value to numbers
        Array.from(formRef.current.children).forEach((input) => {
            input.value.length == 1 && numbers.push(input.value);
        });

        setData({ ...data, code: numbers.join("") });
    };

    useEffect(() => {
        if (data.code.length == 6) {
            axios
                .post(authFetch() + status, data)
                .then((res) => {
                    if (res.status == (200 || 201)) {
                        loginHandler(TOKEN_ADMIN);
                        isRegisterPage
                            ? toast.success("حساب با موفقیت ساخته شد")
                            : toast.success("شما وارد حساب خود شدید");
                        setTimeout(() => {
                            navigate("/");
                        }, 3000);
                    }
                })
                .catch((err) => {
                    toast.error(err.response.data.message);
                });
        }
    }, [data]);

    return (
        <div className="absolute right-1/2 top-1/2 h-72 w-96 -translate-y-1/2 translate-x-1/2 rounded-lg bg-white p-5 shadow-2xl">
            <RiCloseCircleFill size={24} onClick={() => setIsShowModal(false)} />
            <form className="flex flex-col items-center justify-center gap-5 p-10" onSubmit={(e) => submitHandler(e)}>
                <div className="flex w-full justify-between" dir="ltr" ref={formRef}>
                    <input type="text" className="otp__number" onChange={(e) => changeHandler(e)} />
                    <input type="text" className="otp__number" onChange={(e) => changeHandler(e)} />
                    <input type="text" className="otp__number" onChange={(e) => changeHandler(e)} />
                    <input type="text" className="otp__number" onChange={(e) => changeHandler(e)} />
                    <input type="text" className="otp__number" onChange={(e) => changeHandler(e)} />
                    <input type="text" className="otp__number" onChange={(e) => changeHandler(e)} />
                </div>
                <input type="submit" value="تایید" className="btn mt-5" />
            </form>
        </div>
    );
};

OtpModal.propTypes = {
    identifier: PropTypes.string,
    isRegisterPage: PropTypes.bool,
    setIsShowModal: PropTypes.func,
};

export default OtpModal;

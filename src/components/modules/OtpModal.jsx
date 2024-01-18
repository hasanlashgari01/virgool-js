import axios from "axios";
import PropTypes from "prop-types";
import { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { BASE_URL } from "../../services/virgoolApi";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { RiCloseCircleFill } from "react-icons/ri";
import OtpInput from "./OtpInput";

const OtpModal = ({ identifier, isRegisterPage, setIsShowModal }) => {
    const { loginHandler } = useContext(AuthContext);
    const navigate = useNavigate();
    const [data, setData] = useState({ identifier, code: "" });
    const formRef = useRef();
    const [status, setStatus] = useState(isRegisterPage ? "register" : "login");
    let numbers = [];

    const submitHandler = (e) => {
        e.preventDefault();
        // get inputs value and pust value to numbers
        Array.from(formRef.current.firstElementChild.children).forEach((input) => {
            input?.value?.length == 1 && numbers.push(input.value);
        });

        setData({ ...data, code: numbers.join("") });
    };

    useEffect(() => {
        if (data?.code?.length == 6) {
            axios
                .post(`${BASE_URL}v1/auth/${status}`, data)
                .then((res) => {
                    if (res.status == (200 || 201)) {
                        loginHandler(res.data?.accessToken, res?.data?.user);
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
        <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 rounded-lg bg-white px-10 pt-5 shadow-2xl sm:right-1/2 sm:w-96 sm:translate-x-1/2 md:w-[450px] lg:w-[600px]">
            <RiCloseCircleFill size={24} onClick={() => setIsShowModal(false)} />
            <div className="flex flex-col items-center justify-center gap-2 px-5 py-10 sm:gap-5 sm:px-10">
                <div className="text-center">
                    <h3 className="text-3xl font-semibold text-black">تایید ایمیل</h3>
                    <h6 className="mt-3 text-xs lg:text-base">
                        ما یک کد به ایمیل شما ba**@dipainhouse.com ارسال کرده ایم
                    </h6>
                </div>
                <form
                    className="mt-10 w-full justify-center gap-2 px-5 sm:gap-5 lg:w-1/2"
                    dir="ltr"
                    ref={formRef}
                    onSubmit={(e) => submitHandler(e)}
                >
                    <div className="flex">
                        <OtpInput />
                        <OtpInput />
                        <OtpInput />
                        <OtpInput />
                        <OtpInput />
                        <OtpInput />
                    </div>
                    <input type="submit" value="تایید" className="btn mt-10 w-full font-semibold" />
                </form>
            </div>
        </div>
    );
};

OtpModal.propTypes = {
    identifier: PropTypes.string,
    isRegisterPage: PropTypes.bool,
    setIsShowModal: PropTypes.func,
};

export default OtpModal;

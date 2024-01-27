import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { apiRequests } from "../../services/axios/config";
import { schemaLogin, schemaRegister } from "../../validation/AuthForm";
import MsgBox from "./ErrorMessage";
import OtpModal from "./OtpModal";

const AuthForm = ({ isRegisterPage = false, title, submitValue, msgHelpLink, msgHelp }) => {
    const [email, setEmail] = useState("");
    const [isShowModal, setIsShowModal] = useState(false);

    let status = isRegisterPage ? "access-register" : "access-login";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(isRegisterPage ? schemaRegister : schemaLogin) });

    const submitHandler = (data) => {
        setEmail(data.identifier);
        apiRequests
            .post(`v1/auth/${status}`, data)
            .then((res) => {
                if (res.status == (200 || 201)) {
                    toast.success(res.data.message);
                    setIsShowModal(true);
                }
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            });
    };

    return (
        <>
            <div className="flex h-3/4 flex-1 flex-col bg-slate-200 px-10 pt-10 text-gray-600 tb:h-screen tb:justify-center">
                <h2 className="text-xl font-semibold text-blue-500">{title}</h2>
                <form className="mt-5 flex flex-col gap-7" onSubmit={handleSubmit(submitHandler)}>
                    {isRegisterPage && (
                        <label className="relative">
                            <input type="text" placeholder="نام" className="input" {...register("name")} />
                            {errors.name && <MsgBox msg={errors.name.message} />}
                        </label>
                    )}
                    {isRegisterPage && (
                        <label className="relative">
                            <input type="text" placeholder="نام کاربری" className="input" {...register("username")} />
                            {errors.username && <MsgBox msg={errors.username.message} />}
                        </label>
                    )}
                    <label className="relative">
                        <input type="email" placeholder="ایمیل" className="input" {...register("identifier")} />
                        {errors.identifier && <MsgBox msg={errors.identifier.message} />}
                    </label>
                    {isRegisterPage && (
                        <label className="relative">
                            <input
                                type="tel"
                                placeholder="شماره تلفن"
                                className="input"
                                dir="rtl"
                                {...register("phone")}
                            />
                            {errors.phone && <MsgBox msg={errors.phone.message} />}
                        </label>
                    )}
                    <label className="relative">
                        <input type="password" placeholder="رمز عبور" className="input" {...register("password")} />
                        {errors.password && <MsgBox msg={errors.password.message} />}
                    </label>
                    {isRegisterPage && (
                        <label className="relative">
                            <input
                                type="password"
                                placeholder="تکرار رمز عبور"
                                className="input"
                                {...register("confirmPassword")}
                            />
                            {errors.confirmPassword && <MsgBox msg={errors.confirmPassword.message} />}
                        </label>
                    )}
                    <input type="submit" value={submitValue} className="btn mt-3 self-start" />
                </form>
                <div className="mt-8 grid justify-center gap-2.5 text-center">
                    <p>
                        ثبت نام در ویرگول به منزله موافقت با{" "}
                        <Link to="/terms" className="text-blue-500 underline">
                            قوانین
                        </Link>{" "}
                        است
                    </p>
                    <Link to={`/auth/${msgHelpLink}`}>{msgHelp}</Link>
                </div>
                {isShowModal && (
                    <OtpModal identifier={email} isRegisterPage={isRegisterPage} setIsShowModal={setIsShowModal} />
                )}
            </div>
        </>
    );
};

AuthForm.propTypes = {
    isRegisterPage: PropTypes.bool,
    title: PropTypes.string,
    label: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    submitValue: PropTypes.string,
    msgHelpLink: PropTypes.string,
    msgHelp: PropTypes.string,
    submitHandler: PropTypes.func,
};

export default AuthForm;

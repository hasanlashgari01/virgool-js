import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import PropTypes from "prop-types";
import MsgBox from "./ErrorMessage";
import { TOKEN_ADMIN, authFetch } from "../../services/virgoolApi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schemaRegister = yup
	.object({
		name: yup.string().min(3, "اسم باید بیشتر از سه حرف باشد").required("اسم ضروری است"),
		username: yup.string().min(3, "نام کاربری باید بیشتر از سه حرف باشد").required("نام کاربری ضروری است"),
		email: yup.string().email("ایمیل به درستی وارد نشده است").required("ایمیل ضروری است"),
		identifier: yup
			.string()
			.required("شماره تلفن لازم است")
			.matches(phoneRegExp, "شماره تلفن به درستی وارد نشده است"),
		password: yup
			.string()
			.min(8, "رمز عبور باید بین ۸ و ۱۶ کاراکتر باشد")
			.max(16, "رمز عبور باید بین ۸ و ۱۶ کاراکتر باشد"),
		confirmPassword: yup.string().oneOf([yup.ref("password"), null], "رمز عبور یکسان نیست"),
	})
	.required();

const schemaLogin = yup
	.object({
		identifier: yup
			.string()
			.required("شماره تلفن لازم است")
			.matches(phoneRegExp, "شماره تلفن به درستی وارد نشده است"),
		password: yup
			.string()
			.min(8, "رمز عبور باید بین ۸ و ۱۶ کاراکتر باشد")
			.max(16, "رمز عبور باید بین ۸ و ۱۶ کاراکتر باشد"),
	})
	.required();

const AuthForm = ({ isRegisterPage = false, title, submitValue, msgHelpLink, msgHelp }) => {
	const { loginHandler } = useContext(AuthContext);
	const navigate = useNavigate();

	let status = isRegisterPage ? "register" : "login";
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(isRegisterPage ? schemaRegister : schemaLogin) });

	const submitHandler = (data) => {
		axios
			.post(authFetch() + status, data)
			.then((res) => {
				if (res.status == 200) {
					loginHandler(TOKEN_ADMIN);
					toast.loading("در حال رفتن به صفحه اصلی...");
					toast.success("شما وارد حساب خود شدید");
					setTimeout(() => {
						navigate("/");
					}, 3000);
				}
			})
			.catch((err) => {
				if (err.response && err.response.status == 500) {
					toast.error("رمز عبور نادرست است");
				}
			});
	};

	return (
		<>
			<Toaster />
			<div className="flex flex-col flex-1 tb:justify-center pt-10 h-3/4 tb:h-screen bg-slate-200 text-gray-600 px-10">
				<h2 className="text-blue-500 text-xl font-semibold">{title}</h2>
				<form className="flex flex-col gap-7 mt-5" onSubmit={handleSubmit(submitHandler)}>
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
					{isRegisterPage && (
						<label className="relative">
							<input type="email" placeholder="ایمیل" className="input" {...register("email")} />
							{errors.email && <MsgBox msg={errors.email.message} />}
						</label>
					)}
					<label className="relative">
						<input type="text" placeholder="شماره تلفن" className="input" {...register("identifier")} />
						{errors.identifier && <MsgBox msg={errors.identifier.message} />}
					</label>
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
					<input type="submit" value={submitValue} className="btn self-start mt-3" />
				</form>
				<div className="mt-8 grid gap-2.5 justify-center text-center">
					<p>
						ثبت نام در ویرگول به منزله موافقت با{" "}
						<Link to="/terms" className="underline text-blue-500">
							قوانین
						</Link>{" "}
						است
					</p>
					<Link to={`/auth/${msgHelpLink}`}>{msgHelp}</Link>
				</div>
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

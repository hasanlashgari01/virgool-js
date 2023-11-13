import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import * as yup from "yup";
import PropTypes from "prop-types";
import MsgBox from "./ErrorMessage";

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
	.object({
		name: yup.string().min(3, "اسم باید بیشتر از سه حرف باشد").required("اسم ضروری است"),
		email: yup.string().email("ایمیل به درستی وارد نشده است").required("ایمیل ضروری است"),
		phoneNumber: yup
			.string()
			.required("شماره تلفن لازم است")
			.matches(phoneRegExp, "شماره تلفن به درستی وارد نشده است"),
		password: yup
			.string()
			.min(8, "رمز عبور باید بین ۸ و ۱۶ کاراکتر باشد")
			.max(16, "رمز عبور باید بین ۸ و ۱۶ کاراکتر باشد"),
		passwordConfirm: yup.string().oneOf([yup.ref("password"), null], "رمز عبور یکسان نیست"),
	})
	.required();

const AuthForm = ({ isRegisterPage = false, title, submitValue, msgHelpLink, msgHelp }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const formSubmitting = (data) => {
		console.log(data);
	};

	return (
		<div className="flex flex-col flex-1 tb:justify-center pt-10 h-3/4 tb:h-screen bg-slate-200 text-gray-600 px-10">
			<h2 className="text-blue-500 text-xl font-semibold">{title}</h2>
			<form className="flex flex-col gap-7 mt-5" onSubmit={handleSubmit(formSubmitting)}>
				<label className="relative">
					<input type="text" placeholder="نام" className="input" {...register("name")} />
					{errors.name && <MsgBox msg={errors.name.message} />}
				</label>
				<label className="relative">
					<input type="email" placeholder="ایمیل" className="input" {...register("email")} />
					{errors.email && <MsgBox msg={errors.email.message} />}
				</label>
				<label className="relative">
					<input type="text" placeholder="شماره تلفن" className="input" {...register("phoneNumber")} />
					{errors.phoneNumber && <MsgBox msg={errors.phoneNumber.message} />}
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
							{...register("passwordConfirm")}
						/>
						{errors.passwordConfirm && <MsgBox msg={errors.passwordConfirm.message} />}
					</label>
				)}
				<input type="submit" value={submitValue} className="btn self-start mt-3" />
			</form>
			<div className="mt-20 grid gap-10 justify-center text-center">
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

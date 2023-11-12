import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import * as yup from "yup";
import PropTypes from "prop-types";
import MsgBox from "./MsgBox";

const schema = yup.object({ email: yup.string().email().required() });

const AuthForm = ({ title, label, inputPlaceholder, submitValue, msgHelpLink, msgHelp, submitHandler }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: { email: "" },
		resolver: yupResolver(schema),
	});
	const formSubmitting = (data) => console.log(data);

	return (
		<div className="flex flex-col flex-1 tb:justify-center pt-10 h-3/4 tb:h-screen bg-slate-200 text-gray-600 px-10">
			{errors.email && <MsgBox status="error" msg="مقادیر به درستی ارسال نشده است" />}
			<h2 className="text-blue-500 text-xl font-semibold">{title}</h2>
			<form className="flex flex-col gap-4 mt-5" onSubmit={handleSubmit(formSubmitting)}>
				<label htmlFor="register">{label}</label>
				<input
					type="text"
					id="register"
					placeholder={inputPlaceholder}
					className="w-full sm:w-96 shadow-drop rounded-full py-3 px-6 border-none outline-none"
					{...register("email", { required: true })}
				/>
				<input type="submit" value={submitValue} className="btn self-start" />
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
	title: PropTypes.string,
	label: PropTypes.string,
	inputPlaceholder: PropTypes.string,
	submitValue: PropTypes.string,
	msgHelpLink: PropTypes.string,
	msgHelp: PropTypes.string,
	submitHandler: PropTypes.func,
};

export default AuthForm;

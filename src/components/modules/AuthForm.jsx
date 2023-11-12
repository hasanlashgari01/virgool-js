import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AuthForm = ({ title, label, inputPlaceholder, submitValue, msgHelpLink, msgHelp }) => {
	return (
		<div className="flex flex-col flex-1 tb:justify-center pt-10 h-3/4 tb:h-screen bg-slate-200 text-gray-600 px-10">
			<h2 className="text-blue-500 text-xl font-semibold">{title}</h2>
			<form className="flex flex-col gap-4 mt-5">
				<label htmlFor="register">{label}</label>
				<input
					type="text"
					id="register"
					placeholder={inputPlaceholder}
					className="w-full sm:w-96 shadow-drop rounded-full py-3 px-6 border-none outline-none"
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
};

export default AuthForm;

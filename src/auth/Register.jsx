import Aside from "../layouts/auth/Aside";
import AuthForm from "../components/modules/AuthForm";

const Register = () => {
	return (
		<div className="flex flex-col tb:flex-row h-screen">
			<Aside />
			<>
				<AuthForm
					isRegisterPage={true}
					title="ایجاد حساب کاربری"
					submitValue="ایجاد حساب کاربری"
					msgHelpLink="login"
					msgHelp="قبلا عضو شده‌اید؟ رفتن به صفحه ورود"
				/>
			</>
		</div>
	);
};

export default Register;

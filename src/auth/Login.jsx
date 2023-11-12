import AuthForm from "../components/modules/AuthForm";
import Aside from "../layouts/auth/Aside";

const Login = () => {
	return (
		<div className="flex flex-col tb:flex-row h-screen">
			<Aside isLoginPage={true} />
			<>
				<AuthForm
					title="ورود به حساب کاربری"
					label="نام کاربری، پست الکترونیک یا شماره موبایل خود را وارد کنید"
					inputPlaceholder="نام کاربری، پست الکترونیک یا شماره موبایل"
					submitValue="ورود حساب کاربری"
					msgHelpLink="register"
					msgHelp="عضو نیستید؟ ثبت نام کنید"
				/>
			</>
		</div>
	);
};

export default Login;

import Aside from "../layouts/auth/Aside";
import AuthForm from "../components/modules/AuthForm";

const Register = () => {
	const registerHandler = (e) => {
		e.preventDefault();

        
	};

	return (
		<div className="flex flex-col tb:flex-row h-screen">
			<Aside />
			<>
				<AuthForm
					title="ایجاد حساب کاربری"
					label="شماره موبایل یا پست الکترونیک خود را وارد کنید"
					inputPlaceholder="شماره موبایل یا پست الکترونیک"
					submitValue="ایجاد حساب کاربری"
					msgHelpLink="login"
					msgHelp="قبلا عضو شده‌اید؟ رفتن به صفحه ورود"
					submitHandler={registerHandler}
				/>
			</>
		</div>
	);
};

export default Register;

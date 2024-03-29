import AuthForm from "../components/modules/AuthForm";
import Aside from "../layouts/auth/Aside";

const Login = () => {
    return (
        <div className="flex h-screen flex-col tb:flex-row">
            <Aside isLoginPage={true} />
            <>
                <AuthForm
                    title="ورود به حساب کاربری"
                    submitValue="ورود حساب کاربری"
                    msgHelpLink="register"
                    msgHelp="عضو نیستید؟ ثبت نام کنید"
                />
            </>
        </div>
    );
};

export default Login;

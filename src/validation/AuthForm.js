import * as yup from "yup";

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schemaRegister = yup
    .object({
        name: yup.string().min(3, "اسم باید بیشتر از سه حرف باشد").required("اسم ضروری است"),
        username: yup.string().min(3, "نام کاربری باید بیشتر از سه حرف باشد").required("نام کاربری ضروری است"),
        identifier: yup.string().email("ایمیل به درستی وارد نشده است").required("ایمیل ضروری است"),
        phone: yup.string().required("شماره تلفن لازم است").matches(phoneRegExp, "شماره تلفن به درستی وارد نشده است"),
        password: yup
            .string()
            .min(8, "رمز عبور باید بین ۸ و ۱۶ کاراکتر باشد")
            .max(16, "رمز عبور باید بین ۸ و ۱۶ کاراکتر باشد"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "رمز عبور یکسان نیست"),
    })
    .required();

const schemaLogin = yup
    .object({
        identifier: yup.string().email("ایمیل به درستی وارد نشده است").required("ایمیل ضروری است"),
        password: yup
            .string()
            .min(8, "رمز عبور باید بین ۸ و ۱۶ کاراکتر باشد")
            .max(16, "رمز عبور باید بین ۸ و ۱۶ کاراکتر باشد"),
    })
    .required();

export { schemaRegister, schemaLogin };

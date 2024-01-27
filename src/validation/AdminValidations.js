import * as yup from "yup";

const schemaTopic = yup.object({
    name: yup
        .string()
        .min(3, "اسم باید بیشتر از 3 کاراکتر باشد")
        .max(255, "اسم باید کمتر از 255 کاراکتر باشد")
        .required("اسم ضروری است"),
    href: yup
        .string()
        .min(3, "آدرس باید بیشتر از 3 کاراکتر باشد")
        .max(255, "آدرس باید کمتر از 255 کاراکتر باشد")
        .required("آدرس ضروری است"),
});

export { schemaTopic };

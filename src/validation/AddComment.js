import * as yup from "yup";

const schemaComment = yup.object({
    body: yup
        .string()
        .min(20, "متن باید بیشتر از 20 کاراکتر باشد")
        .max(1000, "متن باید کمتر از 1000 کاراکتر باشد")
        .required("کامنت ضروری است"),
    post: yup.string().required(),
});

export { schemaComment };

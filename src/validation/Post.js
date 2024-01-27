import * as yup from "yup";

const schemaPost = yup.object({
    title: yup
        .string()
        .min(3, "عنوان باید بیشتر از 3 کاراکتر باشد")
        .max(255, "عنوان باید کمتر از 255 کاراکتر باشد")
        .required("عنوان ضروری است"),
    description: yup
        .string()
        .min(20, "توضیحات باید بیشتر از 3 کاراکتر باشد")
        .max(1000, "توضیحات باید کمتر از 255 کاراکتر باشد")
        .required(),
    body: yup.string().min(255, "متن باید بیشتر از 255 کاراکتر باشد").required("توضیحات اجباری است"),
    topicID: yup.string().required("ID موضوع اجباری است"),
});

export { schemaPost };

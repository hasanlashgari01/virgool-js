import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import HeaderTop from "../components/templates/HeaderTop";
import { apiRequests, apiRequestsAccess } from "../services/axios/config";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaPost } from "../validation/Post";

const NewPost = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schemaPost) });

    const [body, setBody] = useState();
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        apiRequests("v1/topic").then((data) => setTopics(data.data));
    }, []);

    const onSubmit = (data) => {
        const info = { ...data, cover: data.cover[0].name, body };


        apiRequestsAccess
            .post("v1/post", info)
            .then((res) => {
                if (res.status === 201) {
                    toast.success(`پست ${data.title} با موفقیت ایجاد شد.`);
                }
            })
            .catch((err) => {
                toast.error(err.response.data.message || "ایجاد پست به مشکل خورد");
            });
    };

    return (
        <>
            <HeaderTop />
            <div className="container mt-5 flex flex-col gap-5">
                <form onSubmit={handleSubmit(onSubmit)} className="mt-5 flex flex-col items-start gap-5">
                    <div className="flex items-center justify-between">
                        <input type="file" {...register("cover")} />
                        {errors.cover && <span className="text-sm text-red-500">{errors.cover.message}</span>}
                        <select className="bg-slate-100 px-3 py-2" id="topic" {...register("topicID")}>
                            {topics.map(({ _id, name }) => (
                                <option key={_id} value={_id}>
                                    {name}
                                </option>
                            ))}
                        </select>
                        {errors.topicID && <span className="text-sm text-red-500">{errors.topicID.message}</span>}
                    </div>
                    <input
                        {...register("title", { required: true, minLength: 3, maxLength: 255 })}
                        type="text"
                        placeholder="عنوان پست"
                        className="w-full rounded-lg bg-gray-200/50 px-5 py-2.5 text-black outline-none tb:w-2/3"
                    />
                    {errors.title && <span className="text-sm text-red-500">{errors.title.message}</span>}
                    <textarea
                        {...register("description", { required: true, minLength: 20, maxLength: 1000 })}
                        placeholder="توضیحات پست"
                        className="h-32 w-full rounded-lg bg-gray-200/50 px-5 py-2.5 outline-none tb:w-2/3"
                    />
                    {errors.description && <span className="text-sm text-red-500">{errors.description.message}</span>}
                    <CKEditor
                        config={{ language: "fa" }}
                        editor={ClassicEditor}
                        editor2={ClassicEditor}
                        data=""
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setBody(data);
                        }}
                    />
                    {errors.body && <span className="text-sm text-red-500">{errors.body.message}</span>}
                    <input type="submit" className="btn mb-5" value="انتشار" />
                </form>
            </div>
        </>
    );
};

export default NewPost;

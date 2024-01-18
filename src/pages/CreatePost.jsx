import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import HeaderTop from "../components/templates/HeaderTop";
import { getTokenFromLocalStorage } from "../services/func";
import { BASE_URL, getTopics } from "../services/virgoolApi";

const NewPost = () => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            cover: "",
            title: "",
            description: "",
            body: "",
            topicID: "",
        },
    });

    const [body, setBody] = useState();
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        axios.get(getTopics()).then((data) => setTopics(data.data));
    }, []);

    const onSubmit = (data) => {
        const info = { ...data, cover: data.cover[0].name, body };

        axios
            .post(`${BASE_URL}v1/post`, info, {
                headers: { Authorization: `Bearer ${getTokenFromLocalStorage().token}` },
            })
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
                        <select className="bg-slate-100 px-3 py-2" id="topic" {...register("topicID")}>
                            {topics.map(({ _id, name }) => (
                                <option key={_id} value={_id}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <input
                        {...register("title", { required: true, minLength: 3, maxLength: 255 })}
                        type="text"
                        placeholder="عنوان پست"
                        className="w-full rounded-lg bg-gray-200/50 px-5 py-2.5 text-black outline-none tb:w-2/3"
                    />
                    <textarea
                        {...register("description", { required: true, minLength: 20, maxLength: 1000 })}
                        placeholder="توضیحات پست"
                        className="h-32 w-full rounded-lg bg-gray-200/50 px-5 py-2.5 outline-none tb:w-2/3"
                    />
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
                    <input type="submit" className="btn mb-5" value="انتشار" />
                </form>
            </div>
        </>
    );
};

export default NewPost;

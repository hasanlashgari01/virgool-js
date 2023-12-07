import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { BASE_URL, TOKEN_ADMIN, getTopics } from "../services/virgoolApi";
import HeaderTop from "../components/templates/HeaderTop";

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
            .post(`${BASE_URL}v1/post`, info, { headers: { Authorization: `Bearer ${TOKEN_ADMIN}` } })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <>
            <HeaderTop isLogin={true} />
            <div className="container flex flex-col mt-5 gap-5">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start mt-5 gap-5">
                    <div className="flex justify-between items-center">
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
                        className="bg-gray-200/50 text-black py-2.5 px-5 rounded-lg outline-none w-full tb:w-2/3"
                    />
                    <textarea
                        {...register("description", { required: true, minLength: 20, maxLength: 1000 })}
                        placeholder="توضیحات پست"
                        className="bg-gray-200/50 py-2.5 px-5 rounded-lg outline-none w-full tb:w-2/3 h-32"
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

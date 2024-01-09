import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BASE_URL, TOKEN_ADMIN } from "../services/virgoolApi";
import toast from "react-hot-toast";
import PostDetails from "../components/templates/PostDetails";
import Comment from "../components/templates/Comment";
import HeaderTop from "../components/templates/HeaderTop";
import ErrorMsg from "../components/modules/ErrorMsg";

const PostPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

    const { register, handleSubmit } = useForm({ defaultValues: { body: "", post: "" } });

    useEffect(() => {
        axios.get(`${BASE_URL}v1/post/${postId}`).then(({ data }) => {
            setPost(data.post);
            setComments(data.comments);
        });
    }, []);

    const onSubmit = (data) => {
        const info = { ...data, post: postId };

        axios
            .post(`${BASE_URL}v1/comment`, info, { headers: { Authorization: `Bearer ${TOKEN_ADMIN}` } })
            .then((res) => {
                res && toast.success("نظر شما با موفقیت ثبت شد");
            })
            .catch((err) => err && toast.error("مشکلی رخ داده"));
    };

    return (
        <div className="mb-20">
            <HeaderTop />
            <main className="container">
                <PostDetails post={post} id="post" />
                <div className="mt-10" id="comments">
                    <h1 className="mb-10 font-DanaDemiBold text-3xl">نظرات</h1>
                    <form className="flex flex-col items-start gap-5" onSubmit={handleSubmit(onSubmit)}>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="نظر خود را بنویسید"
                            className="h-32 w-full rounded-lg bg-gray-200/50 px-5 py-2.5 outline-none tb:w-2/3"
                            {...register("body", { required: true, minLength: 20, maxLength: 1000 })}
                        ></textarea>
                        <input type="submit" value="ثبت نظر" className="btn" />
                    </form>
                </div>
                <div className="mt-10">
                    {comments.length >= 1 ? (
                        <ul className="grid w-full gap-5 tb:w-2/3">
                            {comments.map((comment) => (
                                <Comment key={comment._id} {...comment} />
                            ))}
                        </ul>
                    ) : (
                        <ErrorMsg msg="نظری وجود ندارد" />
                    )}
                </div>
            </main>
            <aside></aside>
        </div>
    );
};

export default PostPage;

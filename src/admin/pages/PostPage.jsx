import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import DeleteBox from "../../components/modules/DeleteBox";
import { BASE_URL, TOKEN_ADMIN } from "../../services/virgoolApi";

const PostPage = () => {
    const [posts, setPosts] = useState([]);
    const [itemDetails, setItemDetails] = useState({ id: null, title: null, href: null, category: null });
    const [isShowDeleteBox, setIsShowDeleteBox] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        axios
            .get(`${BASE_URL}v1/admin/post`, { headers: { Authorization: `Bearer ${TOKEN_ADMIN}` } })
            .then(({ data }) => setPosts(data));
    };

    const showModal = (id, title) => {
        setIsShowDeleteBox(true);
        setItemDetails(id, title);
    };

    const deleteHandler = () => {
        axios
            .delete(`${BASE_URL}v1/post/${itemDetails.id}`, {
                headers: { Authorization: `Bearer ${TOKEN_ADMIN}` },
            })
            .then((res) => {
                setIsShowDeleteBox(false);
                if (res.status == 200) {
                    fetchPosts();
                    toast.success(`پست با موفقیت حذف شد.`);
                }
            })
            .catch((err) => err && toast.error(err.response.data.message));
    };

    const postHandler = (url, id, msg) => {
        axios
            .get(`${BASE_URL}v1/admin/post/${url}/${id}`, { headers: { Authorization: `Bearer ${TOKEN_ADMIN}` } })
            .then((res) => {
                if (res.status == 200) {
                    fetchPosts();
                    toast.success(msg);
                }
            })
            .catch((err) => err && toast.error(err.response.data.message));
    };

    const publishHandler = (id) => postHandler("publish", id, "پست به دسته انتشارات منتقل شد.");
    const rejectHandler = (id) => postHandler("draft", id, "پست به دسته رجکت ها منتقل شد.");

    return (
        <div className="flex h-fit flex-1 flex-col">
            <table className="mt-5 h-fit flex-1 border-separate border border-slate-300">
                <thead className="border-collapse border border-slate-500 bg-slate-600 font-IRYekanLight text-sm text-white">
                    <tr className="child:px-4 child:py-2">
                        <th>عکس</th>
                        <th className="flex-1">عنوان</th>
                        <th className="flex-1">نویسنده</th>
                        <th className="w-24">وضعیت</th>
                        <th>بیشتر</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(({ _id, cover, title, status, author }) => (
                        <tr className="child:py-2 child:text-center" key={_id}>
                            <td>
                                <img src={cover} alt="عنوان عکس" />
                            </td>
                            <td>
                                <Link to={`/post/${_id}`}>{title}</Link>
                            </td>
                            <td>
                                <Link to={`/post/${_id}`}>{author.name}</Link>
                            </td>
                            <td>
                                <span
                                    className={`cursor-pointer rounded-md px-2 py-1 text-white 
                                        ${status === "published" ? "bg-green-500" : "bg-red-500"}`}
                                    onClick={() => (status === "published" ? rejectHandler : publishHandler)(_id)}
                                >
                                    {status}
                                </span>
                            </td>
                            <td className="grid cursor-pointer place-content-center">
                                <BiTrash
                                    size={20}
                                    className="cursor-pointer rounded-md text-red-500"
                                    onClick={() => showModal({ id: _id, title })}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <DeleteBox
                title={itemDetails.title}
                category="پست"
                isDelete={isShowDeleteBox}
                setIsDelete={setIsShowDeleteBox}
                deleteHandler={deleteHandler}
            />
        </div>
    );
};

export default PostPage;

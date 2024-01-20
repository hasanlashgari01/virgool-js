import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import DeleteBox from "../../components/modules/DeleteBox";
import { apiRequestsAccess } from "../../services/axios/config";

const CommentPage = () => {
    const [comments, setComments] = useState([]);
    const [itemDetails, setItemDetails] = useState({ id: null, title: null, href: null, category: null });
    const [isShowDeleteBox, setIsShowDeleteBox] = useState(false);

    const fetchComments = () => {
        apiRequestsAccess(`v1/admin/comment`).then(({ data }) => setComments(data));
    };

    useEffect(() => {
        fetchComments();
    }, []);

    const showModal = (id, title) => {
        setIsShowDeleteBox(true);
        setItemDetails(id, title);
    };

    const commentHandler = (url, id, msg) => {
        apiRequestsAccess(`v1/admin/comment/${id}/${url}`)
            .then((res) => {
                if (res.status == 200) {
                    fetchComments();
                    toast.success(msg);
                }
            })
            .catch((err) => err && toast.error(err.response.data.message));
    };

    const acceptHandler = (id) => commentHandler("accept", id, "کامنت به دسته انتشارات منتقل شد.");
    const rejectHandler = (id) => commentHandler("reject", id, "کامنت به دسته رجکت ها منتقل شد.");

    const deleteHandler = () => {
        apiRequestsAccess
            .delete(`v1/admin/comment/${itemDetails.id}`)
            .then((res) => {
                setIsShowDeleteBox(false);
                if (res.status == 200) {
                    fetchComments();
                    toast.success(`کامنت با موفقیت حذف شد.`);
                }
            })
            .catch((err) => err && toast.error(err.response.data.message));
    };

    return (
        <div className="flex h-fit flex-1 flex-col">
            <table className="mt-5 h-fit flex-1 border-separate border border-slate-300">
                <thead className="border-collapse border border-slate-500 bg-slate-600 font-IRYekanLight text-sm text-white">
                    <tr className="child:px-4 child:py-2">
                        <th>کاربر</th>
                        <th className="flex-1">نظر</th>
                        <th>وضعیت</th>
                        <th>بیشتر</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map(({ _id, body, author, post, isAccepted }) => (
                        <tr className="child:py-2 child:text-center" key={_id}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/post/${post?._id}`}>{body}</Link>
                            </td>
                            <td>
                                <span
                                    className={`cursor-pointer rounded-md px-2 py-1 text-white 
                                ${isAccepted ? "bg-green-500" : "bg-red-500"}`}
                                    onClick={() => (isAccepted ? rejectHandler : acceptHandler)(_id)}
                                >
                                    {isAccepted ? "قبول شده" : "رد شده"}
                                </span>
                            </td>
                            <td className="grid cursor-pointer place-content-center">
                                <BiTrash
                                    size={20}
                                    className="cursor-pointer rounded-md text-red-500"
                                    onClick={() => showModal({ id: _id, title: body })}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {!comments.length && <h1 className="text-center">کامنتی در سایت وجود ندارد</h1>}
            <DeleteBox
                title={itemDetails.title}
                category="کامنت"
                isDelete={isShowDeleteBox}
                setIsDelete={setIsShowDeleteBox}
                deleteHandler={deleteHandler}
            />
        </div>
    );
};

export default CommentPage;

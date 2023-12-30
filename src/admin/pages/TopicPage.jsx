import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DeleteMessage from "../../components/modules/DeleteMessage";
import TableAction from "../../components/modules/TableAction";
import { TOKEN_ADMIN, deleteTopic, getTopics } from "../../services/virgoolApi";

const TopicPage = () => {
    const [topics, setTopics] = useState([]);
    const [itemDetails, setItemDetails] = useState({ id: null, title: null, category: null });
    const [isShowDeleteBox, setIsShowDeleteBox] = useState(false);

    useEffect(() => {
        fetchTopics();
    }, []);

    const fetchTopics = () => {
        axios.get(getTopics()).then(({ data }) => setTopics(data));
    };

    const deleteHandler = () => {
        axios
            .delete(deleteTopic(itemDetails.id), { headers: { Authorization: `Bearer ${TOKEN_ADMIN}` } })
            .then((res) => {
                setIsShowDeleteBox(false);
                if (res.status == 200) {
                    fetchTopics();
                    toast.success(`موضوع ${itemDetails.title} با موفقیت حذف شد.`);
                }
            })
            .catch((err) => err && toast.error("مجددا تلاش کنید مشکلی رخ داده است."));
    };

    return (
        <>
            <table className="h-fit flex-1 border-separate border border-slate-300">
                <thead className="border-collapse border border-slate-500 bg-slate-600 font-IRYekanLight text-sm text-white">
                    <tr className="child:px-4 child:py-2">
                        <th className="flex-1">اسم</th>
                        <th className="flex-1">آدرس</th>
                        <th className="w-36">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {topics.map((topic) => (
                        <tr className="child:py-2 child:text-center" key={topic._id}>
                            <td>{topic.name}</td>
                            <td>{topic.href}</td>
                            <TableAction
                                id={topic._id}
                                title={topic.name}
                                category="موضوع"
                                setIsShow={setIsShowDeleteBox}
                                itemDetails={itemDetails}
                                setItemDetails={setItemDetails}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
            <DeleteMessage
                title={itemDetails.title}
                category={itemDetails.category}
                isShow={isShowDeleteBox}
                setIsShow={setIsShowDeleteBox}
                deleteHandler={deleteHandler}
            />
        </>
    );
};

export default TopicPage;

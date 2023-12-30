import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DeleteBox from "../../components/modules/DeleteBox";
import FormBox from "../../components/modules/FormBox";
import TableAction from "../../components/modules/TableAction";
import { BASE_URL, TOKEN_ADMIN, getTopics, topicRoute } from "../../services/virgoolApi";
import { useForm } from "react-hook-form";
import InputEditBox from "../../components/modules/InputEditBox";
import EditBoxFooter from "../../components/modules/EditBoxFooter";
import CreateTopic from "../layout/CreateTopic";

const TopicPage = () => {
    const { register, handleSubmit } = useForm({
        defaultValues: { name: "", href: "" },
    });

    const [topics, setTopics] = useState([]);
    const [itemDetails, setItemDetails] = useState({ id: null, title: null, href: null, category: null });
    const [isShowDeleteBox, setIsShowDeleteBox] = useState(false);
    const [isShowEditBox, setIsShowEditBox] = useState(false);

    useEffect(() => {
        fetchTopics();
    }, []);

    const fetchTopics = () => {
        axios.get(getTopics()).then(({ data }) => setTopics(data));
    };

    const deleteHandler = () => {
        axios
            .delete(`${BASE_URL}v1/admin/topic/${itemDetails.id}`, {
                headers: { Authorization: `Bearer ${TOKEN_ADMIN}` },
            })
            .then((res) => {
                setIsShowDeleteBox(false);
                if (res.status == 200) {
                    fetchTopics();
                    toast.success(`موضوع ${itemDetails.name} با موفقیت حذف شد.`);
                }
            })
            .catch((err) => err && toast.error(err.response.data.message));
    };

    const formSubmitting = (data) => {
        axios
            .patch(`${BASE_URL}v1/admin/topic/${itemDetails.id}`, data, {
                headers: { Authorization: `Bearer ${TOKEN_ADMIN}` },
            })
            .then((res) => {
                setIsShowEditBox(false);
                if (res.status == 201) {
                    fetchTopics();
                    toast.success(`موضوع ${data.name} با موفقیت تغییر کرد.`);
                }
            })
            .catch((err) => err && toast.error(err.response.res.data.message));
    };

    return (
        <div className="flex h-fit flex-1 flex-col">
            <CreateTopic fetchTopics={fetchTopics} />
            <table className="mt-5 h-fit flex-1 border-separate border border-slate-300">
                <thead className="border-collapse border border-slate-500 bg-slate-600 font-IRYekanLight text-sm text-white">
                    <tr className="child:px-4 child:py-2">
                        <th className="flex-1">اسم</th>
                        <th className="flex-1">آدرس</th>
                        <th className="w-24">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {topics.map((topic) => (
                        <tr className="child:py-2 child:text-center" key={topic._id}>
                            <td>{topic.name}</td>
                            <td>{topic.href}</td>
                            <TableAction
                                id={topic._id}
                                name={topic.name}
                                href={topic.href}
                                category="موضوع"
                                setIsShow={setIsShowEditBox}
                                setIsDelete={setIsShowDeleteBox}
                                setItemDetails={setItemDetails}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
            <DeleteBox
                title={itemDetails.name}
                category={itemDetails.category}
                isDelete={isShowDeleteBox}
                setIsDelete={setIsShowDeleteBox}
                deleteHandler={deleteHandler}
            />
            <FormBox
                details={itemDetails}
                isShow={isShowEditBox}
                setIsShow={setIsShowEditBox}
                formSubmitting={formSubmitting}
            >
                <form
                    className="mt-20 inline-flex flex-col rounded-lg bg-white px-16 py-8 shadow-xl"
                    onSubmit={handleSubmit(formSubmitting)}
                >
                    <div className="space-y-5">
                        <InputEditBox title="اسم" register={{ ...register("name", { minLength: 3 }) }} />
                        <InputEditBox title="آدرس" register={{ ...register("href", { minLength: 3 }) }} />
                    </div>
                    <EditBoxFooter setIsShow={setIsShowEditBox} />
                </form>
            </FormBox>
        </div>
    );
};

export default TopicPage;

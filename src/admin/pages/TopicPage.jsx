import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import DeleteBox from "../../components/modules/DeleteBox";
import EditBoxFooter from "../../components/modules/EditBoxFooter";
import FormBox from "../../components/modules/FormBox";
import InputEditBox from "../../components/modules/InputEditBox";
import TableAction from "../../components/modules/TableAction";
import { apiRequests, apiRequestsAccess } from "../../services/axios/config";
import { schemaTopic } from "../../validation/AdminValidations";
import CreateTopic from "../layout/CreateTopic";

const TopicPage = () => {
    const [topics, setTopics] = useState([]);
    const [itemDetails, setItemDetails] = useState({ id: "", title: "", href: "", category: "" });
    const [isShowDeleteBox, setIsShowDeleteBox] = useState(false);
    const [isShowEditBox, setIsShowEditBox] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaTopic),
    });

    useEffect(() => {
        fetchTopics();
    }, []);

    const fetchTopics = () => {
        apiRequests("v1/topic").then(({ data }) => setTopics(data));
    };

    const deleteHandler = () => {
        apiRequestsAccess
            .delete(`v1/admin/topic/${itemDetails.id}`)
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
        apiRequestsAccess
            .patch(`v1/admin/topic/${itemDetails.id}`, data)
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
            <FormBox isShow={isShowEditBox}>
                <form
                    className="mt-20 inline-flex w-2/3 flex-col rounded-lg bg-white px-16 py-8 shadow-xl lg:w-1/2"
                    onSubmit={handleSubmit(formSubmitting)}
                >
                    <div className="space-y-5">
                        <InputEditBox title="اسم" register={{ ...register("name") }} errors={errors.name} />
                        <InputEditBox title="آدرس" register={{ ...register("href") }} errors={errors.href} />
                    </div>
                    <EditBoxFooter setIsShow={setIsShowEditBox} />
                </form>
            </FormBox>
        </div>
    );
};

export default TopicPage;

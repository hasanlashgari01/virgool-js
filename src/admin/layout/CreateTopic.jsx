import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoIosAddCircleOutline } from "react-icons/io";
import EditBoxFooter from "../../components/modules/EditBoxFooter";
import FormBox from "../../components/modules/FormBox";
import InputEditBox from "../../components/modules/InputEditBox";
import { apiRequestsAccess } from "../../services/axios/config";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaTopic } from "../../validation/AdminValidations";

const CreateTopic = ({ fetchTopics }) => {
    const {
        register,
        resetField,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schemaTopic) });
    const [isShow, setIsShow] = useState(false);

    const formSubmitting = (data) => {
        apiRequestsAccess
            .post(`v1/admin/topic`, data)
            .then((res) => {
                setIsShow(false);
                if (res.status == 201) {
                    fetchTopics();
                    toast.success(`موضوع ${data.name} با موفقیت ایجاد شد.`);
                    resetField("name");
                    resetField("href");
                }
            })
            .catch((err) => err && toast.error(err.response.res.data.message));
    };

    return (
        <div>
            <button
                className="flex items-center gap-3 rounded-md bg-blue-500 px-5 py-2.5 text-white transition-colors hover:bg-blue-600 max-md:cursor-none"
                onClick={() => setIsShow(true)}
            >
                <IoIosAddCircleOutline size={20} />
                موضوع جدید
            </button>

            <FormBox isShow={isShow}>
                <form
                    className="mt-20 inline-flex w-2/3 flex-col rounded-lg bg-white px-16 py-8 shadow-xl lg:w-1/2"
                    onSubmit={handleSubmit(formSubmitting)}
                >
                    <div className="space-y-5">
                        <InputEditBox title="اسم" register={{ ...register("name") }} errors={errors.name} />
                        <InputEditBox title="آدرس" register={{ ...register("href") }} errors={errors.href} />
                    </div>
                    <EditBoxFooter setIsShow={setIsShow} />
                </form>
            </FormBox>
        </div>
    );
};

export default CreateTopic;

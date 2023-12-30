import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosAddCircleOutline } from "react-icons/io";
import EditBoxFooter from "../../components/modules/EditBoxFooter";
import FormBox from "../../components/modules/FormBox";
import InputEditBox from "../../components/modules/InputEditBox";
import { BASE_URL, TOKEN_ADMIN } from "../../services/virgoolApi";
import toast from "react-hot-toast";

const CreateTopic = ({ fetchTopics }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: { name: "", href: "" },
    });

    const [isShow, setIsShow] = useState(false);

    const formSubmitting = (data) => {
        axios
            .post(`${BASE_URL}v1/admin/topic`, data, {
                headers: { Authorization: `Bearer ${TOKEN_ADMIN}` },
            })
            .then((res) => {
                setIsShow(false);
                if (res.status == 201) {
                    fetchTopics();
                    toast.success(`موضوع ${data.name} با موفقیت ایجاد شد.`);
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
                    className="mt-20 inline-flex flex-col rounded-lg bg-white px-16 py-8 shadow-xl"
                    onSubmit={handleSubmit(formSubmitting)}
                >
                    <div className="space-y-5">
                        <InputEditBox title="اسم" register={{ ...register("name", { minLength: 3 }) }} />
                        <InputEditBox title="آدرس" register={{ ...register("href", { minLength: 3 }) }} />
                    </div>
                    <EditBoxFooter setIsShow={setIsShow} />
                </form>
            </FormBox>
        </div>
    );
};

export default CreateTopic;

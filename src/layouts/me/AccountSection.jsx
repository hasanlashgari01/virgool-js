import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import MsgBox from "../../components/modules/ErrorMessage";
import { apiRequestsAccess } from "../../services/axios/config";

const AccountSection = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: async () => {
            const {
                data: { username, email, phone },
            } = await apiRequestsAccess.get("v1/user/me/settings");

            return {
                username,
                email,
                phone,
            };
        },
    });

    const updateHandler = (data) => {
        apiRequestsAccess
            .put("v1/user/me/settings", data)
            .then((res) => {
                if (res.status == 201) {
                    toast.success("اطلاعات به روز شد.");
                }
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            });
    };

    return (
        <div>
            <h1 className="border-b border-[#cacaca] pb-5 text-xl lg:text-2xl">حساب کاربری</h1>
            <form className="mb-28 mt-10 space-y-8" onSubmit={handleSubmit(updateHandler)}>
                <label htmlFor="">
                    <input
                        type="text"
                        name="username"
                        className="w-full cursor-text border-b bg-transparent py-3 outline-none"
                        dir="ltr"
                        {...register("username")}
                    />
                    {errors.username && <MsgBox msg={errors.username.message} />}
                </label>
                <label htmlFor="">
                    <input
                        type="text"
                        name="email"
                        dir="ltr"
                        className="w-full cursor-text border-b bg-transparent py-3 outline-none"
                        {...register("email")}
                    />
                    {errors.email && <MsgBox msg={errors.email.message} />}
                </label>
                <label htmlFor="">
                    <input
                        type="text"
                        name="phone"
                        dir="ltr"
                        className="w-full cursor-text border-b bg-transparent py-3 outline-none"
                        {...register("phone")}
                    />
                    {errors.phone && <MsgBox msg={errors.phone.message} />}
                </label>
                <input type="submit" value="ثبت عملیات" className="btn" />
            </form>
        </div>
    );
};

AccountSection.propTypes = {};

export default AccountSection;

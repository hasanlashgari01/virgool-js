import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import MsgBox from "../../components/modules/ErrorMessage";
import InputRadio from "../../components/modules/InputRadio";
import InputRadioWrapper from "../../components/modules/InputRadioWrapper";
import { apiRequestsAccess } from "../../services/axios/config";

const PersonalInformation = () => {
    const [value, setValue] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: async () => {
            const {
                data: { twitter, linkedin, telegram },
            } = await apiRequestsAccess.get("v1/user/me/settings");

            return {
                twitter,
                linkedin,
                telegram,
            };
        },
    });

    useEffect(() => {
        apiRequestsAccess.get("v1/user/me/settings").then((res) => setValue(res.data.gender.toLowerCase()));
    }, []);

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
        <div className="mt-20 space-y-5">
            <h1 className="border-b border-[#cacaca] pb-5 text-xl lg:text-2xl">اطلاعات شخصی</h1>
            <div className="mb-28 mt-10 space-y-8">
                <InputRadioWrapper value={value} type="gender" title="جنسیت">
                    <InputRadio type="gender" id="women" name="زن" />
                    <InputRadio type="gender" id="other" name="سایر" />
                    <InputRadio type="gender" id="man" name="مرد" />
                </InputRadioWrapper>
                <form className="mb-28 mt-10 space-y-8" onSubmit={handleSubmit(updateHandler)}>
                    <label htmlFor="">
                        <input
                            type="text"
                            name="name"
                            className="w-full cursor-text border-b bg-transparent py-3 outline-none"
                            {...register("twitter")}
                            placeholder="اکانت توییتر"
                        />
                        {errors.twitter && <MsgBox msg={errors.twitter.message} />}
                    </label>
                    <label htmlFor="">
                        <input
                            type="text"
                            name="name"
                            className="w-full cursor-text border-b bg-transparent py-3 outline-none"
                            {...register("linkedin")}
                            placeholder="اکانت لینکدین"
                        />
                        {errors.linkedin && <MsgBox msg={errors.linkedin.message} />}
                    </label>
                    <label htmlFor="">
                        <input
                            type="text"
                            name="name"
                            className="w-full cursor-text border-b bg-transparent py-3 outline-none"
                            {...register("telegram")}
                            placeholder="اکانت تلگرام"
                        />
                        {errors.telegram && <MsgBox msg={errors.telegram.message} />}
                    </label>
                    <input type="submit" value="ثبت عملیات" className="btn" />
                </form>
            </div>
        </div>
    );
};

export default PersonalInformation;

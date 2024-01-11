import axios from "axios";
import propTypes from "prop-types";
import { useForm } from "react-hook-form";
import MsgBox from "../../components/modules/ErrorMessage";
import { getTokenFromLocalStorage } from "../../services/func";
import { BASE_URL, getUser, putUser } from "../../services/virgoolApi";
import toast from "react-hot-toast";

const AboutMeSection = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: async () => {
            const {
                data: { name, biography },
            } = await axios.get(getUser(), {
                headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
            });

            return {
                name,
                biography,
            };
        },
    });

    const updateHandler = (data) => {
        axios
            .put(`${BASE_URL}v1/user/me/settings`, data, {
                headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
            })
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
            <h1 className="mb-5 border-b border-[#cacaca] pb-5 text-xl lg:text-2xl">درباره شما</h1>
            <form className="mb-28 mt-10 space-y-8" onSubmit={handleSubmit(updateHandler)}>
                <label htmlFor="">
                    <input
                        type="text"
                        name="name"
                        className="w-full cursor-text border-b bg-transparent py-3 outline-none"
                        {...register("name")}
                    />
                    {errors.name && <MsgBox msg={errors.name.message} />}
                </label>
                <label htmlFor="">
                    <input
                        type="text"
                        name="name"
                        className="w-full cursor-text border-b bg-transparent py-3 outline-none"
                        {...register("biography")}
                    />
                    {errors.biography && <MsgBox msg={errors.biography.message} />}
                </label>
                <label htmlFor="">
                    <input
                        type="text"
                        name="name"
                        className="w-full cursor-text border-b bg-transparent py-3 outline-none"
                        {...register("avatar")}
                    />
                    {errors.avatar && <MsgBox msg={errors.avatar.message} />}
                </label>
                <input type="submit" value="ثبت عملیات" className="btn" />
            </form>
        </div>
    );
};

AboutMeSection.propTypes = {
    userDetails: propTypes.any,
    setUserDetails: propTypes.func,
};

export default AboutMeSection;

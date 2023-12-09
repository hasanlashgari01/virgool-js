import axios from "axios";
import propTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import EditButton from "../../components/modules/EditButton";
import { TOKEN_ADMIN, getUser } from "../../services/virgoolApi";
import EditInput from "../../components/modules/EditInput";

const Main = ({ setTopPosition }) => {
    const [userDetails, setUserDetails] = useState();

    const mainRef = useRef();

    useEffect(() => {
        setTopPosition([]);

        Array.from(mainRef.current.children).forEach((element, index) => {
            setTopPosition((prevTopPosition) => [
                ...prevTopPosition,
                { id: index + 1, text: element.firstChild.textContent, top: element.offsetTop },
            ]);
        });
    }, []);

    useEffect(() => {
        axios
            .get(getUser(), { headers: { Authorization: `Bearer ${TOKEN_ADMIN}` } })
            .then(({ data }) => {
                setUserDetails(data);
            })
            .catch((err) => console.log(err.response.data.message));
    }, []);

    return (
        <div className="basis-full child:h-screen" ref={mainRef}>
            <div>
                <h1 className="text-xl lg:text-2xl pb-5 border-b border-[#cacaca]">درباره شما</h1>
                <div className="py-10">
                    {userDetails && (
                        <>
                            <EditInput
                                userDetails={userDetails.name}
                                setUserDetails={setUserDetails}
                                description="نام نمایشی خود را وارد کنید"
                            />
                            <EditInput
                                userDetails={userDetails.biography}
                                setUserDetails={setUserDetails}
                                description="بیوگرافی شما در صفحه پروفایل نمایش داده می شود. حداکثر ۲۰۰ کاراکتر"
                            />
                            <EditInput
                                image="/public/images/Ana-de-Armas-300x400.jpg"
                                userDetails={userDetails.biography}
                                setUserDetails={setUserDetails}
                                description="عکس شما در صفحه پروفایل و پست‌ها نمایش داده می‌شود."
                            />
                        </>
                    )}
                </div>
            </div>
            <div className="mt-20">
                <h1>حساب کاربری</h1>
            </div>
            <div className="mt-20">
                <h1>اطلاعات شخصی</h1>
            </div>
            <div className="mt-20">
                <h1>ایمیل نوتیفیکیشن</h1>
            </div>
            <div className="mt-20">
                <h1>تنظیمات حالت شب</h1>
            </div>
            <div className="mt-20">
                <h1>تنظیمات پیشرفته</h1>
            </div>
        </div>
    );
};

Main.propTypes = {
    setTopPosition: propTypes.func,
};

export default Main;

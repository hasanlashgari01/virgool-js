import propTypes from "prop-types";
import { useEffect, useRef } from "react";

const Main = ({ setTopPosition }) => {
    const mainRef = useRef();

    useEffect(() => {
        Array.from(mainRef.current.children).forEach((element, index) => {
            setTopPosition((prevTopPosition) => [
                ...prevTopPosition,
                { id: index + 1, text: element.textContent, top: element.offsetTop },
            ]);
        });
    }, []);

    return (
        <div className="basis-full child:h-screen" ref={mainRef}>
            <div>
                <h1>درباره شما</h1>
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

import { useEffect, useRef } from "react";

const items = [
    { id: 1, text: "درباره شما" },
    { id: 2, text: "حساب کاربری" },
    { id: 3, text: "اطلاعات شخصی" },
    { id: 4, text: "ایمیل نوتیفیکیشن" },
    { id: 5, text: "تنظیمات حالت شب" },
    { id: 6, text: "تنظیمات پیشرفته" },
];

const Aside = () => {
    const asideRef = useRef();

    useEffect(() => {
        Array.from(asideRef.current.children)[0].classList.add("active");
    }, []);

    const goItem = (e) => {
        Array.from(asideRef.current.children).forEach((item) => {
            item.classList.remove("active");
        });
        e.target.classList.add("active");
    };

    return (
        <div className="basis-80 sticky top-20">
            <h1 className="text-2xl">تنظیمات کاربری</h1>
            <ul className="settings" ref={asideRef}>
                {items.map((item) => (
                    <li key={item.id} className="item" onClick={(e) => goItem(e)}>
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Aside;

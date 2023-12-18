import { useEffect, useRef } from "react";
import propTypes from "prop-types";

const Aside = ({ topPosition }) => {
    const asideRef = useRef();

    const onLoadHandler = () => {
        Array.from(asideRef.current.children)[0].classList.add("active");

        window.removeEventListener("load", onLoadHandler);
    };

    useEffect(() => {
        window.addEventListener("load", onLoadHandler);
    }, []);

    const goItem = (e, top) => {
        Array.from(asideRef.current.children).forEach((item) => {
            item.classList.remove("active");
        });
        e.target.classList.add("active");
        window.scrollTo({
            top: top,
            behavior: "smooth",
        });
    };

    return (
        <div className="hidden tb:block basis-80 sticky top-20">
            <h1 className="text-2xl">تنظیمات کاربری</h1>
            {topPosition && (
                <ul className="settings" ref={asideRef}>
                    {topPosition.map(({ id, text, top }) => (
                        <li key={id} className="item" onClick={(e) => goItem(e, top)}>
                            {text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

Aside.propTypes = {
    topPosition: propTypes.array,
};

export default Aside;

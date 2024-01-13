import { useRef, useState } from "react";

const useDropDown = () => {
    const imgRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    window.addEventListener("click", (e) => {
        if (e.target !== imgRef.current) {
            setIsOpen(false);
        }
    });

    return [imgRef, isOpen, setIsOpen];
};

export default useDropDown;

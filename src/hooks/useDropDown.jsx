import { useRef, useState } from "react";

const useDropDown = () => {
	const imgRef = useRef();
	const [isOpen, setIsOpen] = useState(false);

	const openHandler = () => {
		setIsOpen(!isOpen);
	};

	window.addEventListener(
		"click",
		(e) => {
			if (e.target !== imgRef.current) {
				setIsOpen(false);
			}
		},
		{ capture: true }
	);

	return [imgRef, isOpen, setIsOpen, openHandler];
};

export default useDropDown;

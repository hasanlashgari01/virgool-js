import { IoIosSearch } from "react-icons/io";
import useDropDown from "../../hooks/useDropDown";

const HeaderSearch = () => {
	const [imgRef, isOpen, openHandler] = useDropDown();

	return (
		<div>
			<div
				className="relative inline-flex justify-center items-center w-8 aspect-square cursor-pointer"
				onClick={openHandler}
				ref={imgRef}
			>
				<IoIosSearch size={24} />
			</div>
			<form
				className={`${isOpen ? "top-0" : "-top-96"} 
                fixed left-0 right-0 h-16 bg-white shadow-drop z-10 transition-all ease-in-out`}
				onClick={openHandler}
			>
				<div className="flex container h-full">
					<input
						type="text"
						placeholder="در بین مقالات، نویسندگان و… جستجو کنید"
						className="w-full h-full outline-none"
					/>
				</div>
			</form>
		</div>
	);
};

export default HeaderSearch;

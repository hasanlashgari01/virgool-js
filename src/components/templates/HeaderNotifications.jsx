import { IoMdNotificationsOutline } from "react-icons/io";
import useDropDown from "../../hooks/useDropDown";
import { Link } from "react-router-dom";

const HeaderNotifications = () => {
	const [imgRef, isOpen, openHandler] = useDropDown();

	return (
		<div>
			<div
				className="relative inline-flex justify-center items-center w-8 aspect-square cursor-pointer"
				onClick={openHandler}
				ref={imgRef}
			>
				<IoMdNotificationsOutline size={24} />
				<span className="absolute right-0 bottom-0 bg-red-700 w-1.5 aspect-square rounded-full"></span>
			</div>
			<div
				className={`${isOpen ? "left-0" : "-left-96"} 
                fixed top-0 bottom-0 w-96 bg-gray-200 shadow-drop z-10 transition-all ease-in-out`}
			>
				<div className="flex h-16 justify-center items-center gap-5 border-b border-black/25">
					<h3>اطلاعیه ها</h3>
					<span className="bg-blue-500 w-fit py-0.5 px-2 text-center rounded-md text-white">۱۰۰</span>
				</div>
				<ul className="text-sm px-7 mt-4 space-y-4">
					<Link className="flex flex-col pb-4 border-b border-black/25">
						اگه ابرقهرمان بیمه‌ای بودی توی کدوم سکانس سینمایی حضور داشتی؟ با تگ بسپرش به ازکی بنویس.
						<h5 className="self-end mt-2 text-blue-600">۳ هفته پیش</h5>
					</Link>
					<Link className="flex flex-col pb-4 border-b border-black/25">
						اگه ابرقهرمان بیمه‌ای بودی توی کدوم سکانس سینمایی حضور داشتی؟ با تگ بسپرش به ازکی بنویس.
						<h5 className="self-end mt-2 text-blue-600">۳ هفته پیش</h5>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default HeaderNotifications;

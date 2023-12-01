import { Link } from "react-router-dom";
import ChevronLeftIcon from "../../assets/chevron-left.svg";

const Welcome = () => {
	return (
		<div className="">
			<h3 className="font-IRYekanBold text-lg">به ویرگول خوش آمدید</h3>
			<p className="text-[#858585] font-IRYekanMedium mt-2 mb-4 leading-6 text-sm">
				زمان آن رسیده که شیوه‌ی نوشتن و خواندن مطالبتان را تغییر دهید. اگر برای آغاز دوران جدید آماده هستید به
				ویرگول خوش آمدید.
			</p>
			<Link
				to="/auth/register"
				className="inline-flex items-center gap-3 py-2.5 px-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-full transition-colors"
			>
				میخواهم ثبت نام کنم
				<img src={ChevronLeftIcon} alt="" className="w-4 h-4" />
			</Link>
		</div>
	);
};

export default Welcome;

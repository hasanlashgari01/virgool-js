import propTypes from "prop-types";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import LinkItem from "../../components/templates/LinkItem";

const Aside = ({ isLoginPage = false }) => {
	return (
		<div className="hidden lg:flex relative flex-col justify-center items-center bg-gradient-1 tb:w-1/2 xl:w-8/12 h-1/4 tb:h-screen text-white">
			<div className="flex flex-col justify-center items-center text-center px-6">
				<img src="https://virgool.io/images/logo-bg.svg" alt="" />
				<h3 className="text-2xl font-IRYekanBold">اینجا هر کسی می‌تونه بنویسه!</h3>
				<h4 className="hidden lg:block mt-5">
					همین حالا حساب کاربری خودت را بساز و دوران جدید وبلاگ نویسی را شروع کن.
				</h4>
				{isLoginPage && (
					<ul className="hidden tb:flex list-disc flex-col items-start gap-3 mt-10">
						<li>
							اگر شما هم عاشق مطالعه هستید در ویرگول می‌توانید مطالب متنوعی را در موضوعات مختلف بخوانید.
						</li>
						<li>با نوشتن مطلبتان در ویرگول آن را در معرض دید قشر وسیعی از خوانندگان قرار خواهید داد.</li>
						<li>ویرگول آمار دقیقی از تعداد و میزان خوانده شدن مطلبتان به شما ارائه می‌دهد.</li>
					</ul>
				)}
			</div>
			<footer className="absolute bottom-8 px-10 xl:flex justify-between w-full">
				<span>© تمام حقوق برای ویرگول محفوظ است.</span>
				<ul className="flex gap-3 items-center">
					<LinkItem to="/" name="صفحه اصلی" />
					<LinkItem to="/" name="تماس با ما" />
					<LinkItem to="/" name={<AiOutlineInstagram />} />
					<LinkItem to="/" name={<RiTwitterXLine />} />
				</ul>
			</footer>
		</div>
	);
};

Aside.propTypes = {
	isLoginPage: propTypes.bool,
};

export default Aside;

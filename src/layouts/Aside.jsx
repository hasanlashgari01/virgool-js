import { useState } from "react";
import Welcome from "../components/templates/Welcome";
import PostBox from "../components/templates/PostBox";

const Aside = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<div className="max-tb:hidden w-1/3 space-y-8">
			{!isLogin ? (
				<>
					<Welcome />
					<PostBox title="محبوب‌ترین‌های ویرگول" />
				</>
			) : (
				<>
					<PostBox title="جدیدترین پست‌های دوستان" subTitle="و انتشاراتی که دنبال می‌کنید" />
					<PostBox title="پست‌های ذخیره شده" />
				</>
			)}
		</div>
	);
};

export default Aside;

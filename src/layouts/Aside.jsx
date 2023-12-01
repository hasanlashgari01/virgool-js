import { useState } from "react";
import Welcome from "../components/templates/Welcome";
import PostBox from "../components/templates/PostBox";
import useGetAxios from "../hooks/useGetAxios";

const Aside = () => {
	const [data] = useGetAxios({ url: "v1/post" });
	const [isLogin, setIsLogin] = useState(true);

	return (
		<div className="max-tb:hidden w-1/3 space-y-8">
			{!isLogin ? (
				<>
					<Welcome />
					<PostBox posts={data} title="محبوب‌ترین‌های ویرگول" />
				</>
			) : (
				<>
					<PostBox posts={data} title="جدیدترین پست‌های دوستان" subTitle="و انتشاراتی که دنبال می‌کنید" />
					<PostBox posts={data} title="پست‌های ذخیره شده" />
				</>
			)}
		</div>
	);
};

export default Aside;

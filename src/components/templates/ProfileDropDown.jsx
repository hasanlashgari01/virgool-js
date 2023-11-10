import { useState } from "react";
import LinkItem from "./LinkItem";
import NewPost from "./NewPost";
import { BsMoon, BsSun } from "react-icons/bs";

const links = [
	{ id: 1, link: "/me/settings", name: "تنظیمات حساب کاربری" },
	{ id: 2, link: "/posts/drafts", name: "پست ها و پیش نویس ها" },
	{ id: 3, link: "/me/interests", name: "علاقه‌مندی‌های من" },
	{ id: 4, link: "/me/likes", name: "پست‌های مورد علاقه من" },
	{ id: 5, link: "/me/lists", name: "لیست ها" },
];

const ProfileDropDown = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const changeTheme = () => setIsDarkMode(!isDarkMode);
	return (
		<div className="relative">
			<div className="w-10 h-10 overflow-hidden rounded-full cursor-pointer">
				<img src="/public/images/Ana-de-Armas-300x400.jpg" alt="عکس پروفایل" />
			</div>
			<ul className="absolute w-72 top-14 left-0 px-3 rounded-md shadow-drop child:dropdown-border">
				<div>
					<h4>حسن لشکری</h4>
					<LinkItem to="" name="مشاهده پروفایل" classN="text-gray-700" />
				</div>
				<div className="child:py-1">
					<NewPost />
					{links.map(({ id, link, name }) => (
						<LinkItem key={id} to={link} name={name} />
					))}
				</div>
				<div>
					<LinkItem to="/me/publications" name="انتشارات" />
				</div>
				<div className="flex justify-between items-center cursor-pointer select-none" onClick={changeTheme}>
					<span>حالت {isDarkMode ? "شب" : "روز"}</span>
					{isDarkMode ? <BsMoon /> : <BsSun />}
				</div>
				<div>
					<LinkItem to="/logout" name="خروج" />
				</div>
			</ul>
		</div>
	);
};

export default ProfileDropDown;

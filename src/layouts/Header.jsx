import { Link } from "react-router-dom";
import LinkItem from "../components/templates/LinkItem";
import ProfileDropDown from "../components/templates/ProfileDropDown";
import NewPost from "../components/templates/NewPost";

const items = [
	{ id: 1, link: "/", name: "صفحه اصلی" },
	{ id: 2, link: "/auth/register", name: "ثبت نام" },
	{ id: 3, link: "/auth/login", name: "ورود" },
	{ id: 4, link: "/me", name: "حساب کاربری" },
];

const Header = () => {
	return (
		<header>
			<div className="flex justify-between items-center">
				<div className="flex gap-2.5">
					<img src="https://virgool.io/images/icon.svg" alt="آیکون ویرگول" />
					<NewPost />
				</div>
				<div>
					<ProfileDropDown />
				</div>
			</div>
			<nav>
				<ul className="flex gap-3">
					{items.map(({ id, link, name }) => (
						<LinkItem key={id} to={link} name={name} />
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;

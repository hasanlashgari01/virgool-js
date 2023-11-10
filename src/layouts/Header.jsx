import LinkItem from "../components/templates/LinkItem";
import ProfileDropDown from "../components/templates/ProfileDropDown";
import NewPost from "../components/templates/NewPost";
import { Link } from "react-router-dom";

const items = [
	{ id: 1, link: "/", name: "صفحه اصلی" },
	{ id: 2, link: "/auth/register", name: "ثبت نام" },
	{ id: 3, link: "/auth/login", name: "ورود" },
	{ id: 4, link: "/me", name: "حساب کاربری" },
];

const Header = () => {
	return (
		<header>
			<div className="flex justify-between items-center py-6">
				<div className="flex gap-2.5">
					<img src="https://virgool.io/images/icon.svg" alt="آیکون ویرگول" />
					<NewPost />
				</div>
				<div>
					{/* <ProfileDropDown /> */}
					<div className="flex gap-3 items-center">
						<Link to="/auth/login" className="text-blue-500 bg-white py-2 px-6">
							ورود
						</Link>
						<Link to="/auth/register" className="bg-blue-500 text-white py-2 px-6 rounded-md">
							ثبت نام
						</Link>
					</div>
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

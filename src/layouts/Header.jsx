import LinkItem from "../components/templates/LinkItem";

const items = [
	{ id: 1, link: "/", name: "صفحه اصلی" },
	{ id: 2, link: "/auth/register", name: "ثبت نام" },
	{ id: 3, link: "/auth/login", name: "ورود" },
	{ id: 4, link: "/me", name: "حساب کاربری" },
];

const Header = () => {
	return (
		<header>
			<img src="https://virgool.io/images/virgool-60.png" alt="" />
			<ul className="flex gap-3">
				{items.map(({ id, link, name }) => (
					<LinkItem key={id} to={link} name={name} />
				))}
			</ul>
		</header>
	);
};

export default Header;

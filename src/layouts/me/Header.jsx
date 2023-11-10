import LinkItem from "../../components/templates/LinkItem";

const items = [
	{ id: 1, link: "/", name: "صفحه اصلی" },
	{ id: 2, link: "settings", name: "تنظیمات" },
	{ id: 3, link: "publications", name: "انتشارات" },
	{ id: 4, link: "lists", name: "لیست ها" },
	{ id: 5, link: "likes", name: "لایک ها" },
];

const Header = () => {
	return (
		<header>
			<ul className="flex gap-3">
				{items.map(({ id, link, name }) => (
					<LinkItem key={id} to={link} name={name} />
				))}
			</ul>
		</header>
	);
};

export default Header;

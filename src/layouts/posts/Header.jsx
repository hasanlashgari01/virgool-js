import LinkItem from "../../components/templates/LinkItem";

const items = [
	{ id: 1, link: "drafts", name: "پیش‌نویس‌ها" },
	{ id: 2, link: "published", name: "پست‌های منتشر شده" },
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

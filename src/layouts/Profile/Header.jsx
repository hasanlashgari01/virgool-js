import LinkItem from "../../components/templates/LinkItem";

const items = [
	{ id: 1, link: "posts", name: "پست ها" },
	{ id: 2, link: "lists", name: "لیست ها" },
	{ id: 3, link: "publications", name: "انتشارات" },
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

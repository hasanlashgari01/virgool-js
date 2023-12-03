let options = { month: "long", day: "numeric" };

const toDate = (date) => {
	const time = new Date(date);
	return time.toLocaleDateString("fa-IR", options);
};

export { toDate };

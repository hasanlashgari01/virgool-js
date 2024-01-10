let options = { month: "long", day: "numeric" };

const toDate = (date) => {
    const time = new Date(date);
    return time.toLocaleDateString("fa-IR", options);
};

const getTokenFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export { toDate, getTokenFromLocalStorage };

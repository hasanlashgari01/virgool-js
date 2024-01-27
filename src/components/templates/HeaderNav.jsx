import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import useGetAxios from "../../hooks/useGetAxios";
import LinkItem from "./LinkItem";

const HeaderNav = () => {
    const {
        defaultValue: { isLoggedIn },
    } = useContext(AuthContext);

    const [data, setData] = useGetAxios({ url: "v1/topic" });
    const shuffledTopics = data.sort((a, b) => 0.5 - Math.random());

    useEffect(() => {
        setData(shuffledTopics);
    }, []);

    return (
        <nav
            className={`${isLoggedIn ? "bg-blue-500 text-white/90 hover:text-white" : "bg-transparent text-black/100"}`}
        >
            <ul className="container flex gap-5 py-4 text-sm">
                <LinkItem to="http://localhost:5173" name="صفحه اصلی" />
                {data.map(({ _id, href, name }) => (
                    <LinkItem key={_id} to={`/topic/${href}`} name={name} />
                ))}
            </ul>
        </nav>
    );
};

HeaderNav.propTypes = {
    items: PropTypes.array,
    isLogin: PropTypes.bool,
};

export default HeaderNav;

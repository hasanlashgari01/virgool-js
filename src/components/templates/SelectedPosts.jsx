import propTypes from "prop-types";
import useGetAxios from "../../hooks/useGetAxios";
import SelectedPost from "./SelectedPost";
import Title from "./Title";

const SelectedPosts = ({ isSelected, title, className }) => {
    const [data] = useGetAxios({ url: "v1/post" });

    const shuffledData = [...data].sort(() => 0.5 - Math.random()).slice(0, 4);

    return (
        <>
            <Title text={title} />
            <div className={`mb-10 grid grid-cols-1 ${className}`}>
                {(isSelected ? shuffledData : data).map((post) => (
                    <SelectedPost key={post._id} {...post} />
                ))}
            </div>
        </>
    );
};

SelectedPosts.propTypes = {
    isSelected: propTypes.bool,
    title: propTypes.string,
    className: propTypes.string,
};

export default SelectedPosts;

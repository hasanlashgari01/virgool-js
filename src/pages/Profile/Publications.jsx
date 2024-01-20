import ErrorMsg from "../../components/modules/ErrorMsg";
import { useProfile } from "../../context/ProfileContext";
import Post from "../../layouts/Profile/Post";

const Publications = () => {
    const { isLoading, publishedPosts } = useProfile();

    if (isLoading) return <h1>در حال گرفتن اطلاعات...</h1>;

    return (
        <ul className="flex flex-col gap-5 xl:items-center">
            {!isLoading && publishedPosts.length >= 1
                ? publishedPosts.map((post) => <Post key={post._id} {...post} />)
                : !isLoading && <ErrorMsg msg="لیست پست ها خالی می باشد" />}
        </ul>
    );
};

export default Publications;

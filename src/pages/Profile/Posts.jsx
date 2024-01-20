import ErrorMsg from "../../components/modules/ErrorMsg";
import { useProfile } from "../../context/ProfileContext";
import Post from "../../layouts/Profile/Post";

const Posts = () => {
    const { isLoading, posts } = useProfile();

    if (isLoading) return <h1>در حال گرفتن اطلاعات...</h1>;

    return (
        <ul className="flex flex-col gap-5 xl:items-center">
            {posts.length >= 1
                ? posts.map((post) => <Post key={post._id} {...post} />)
                : !isLoading && <ErrorMsg msg="لیست پست ها خالی می باشد" />}
        </ul>
    );
};

export default Posts;

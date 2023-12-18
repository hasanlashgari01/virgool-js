import PostItem from "../../components/modules/PostItem";
import { usePosts } from "../../context/PostsContext";

const Published = () => {
    const [posts] = usePosts();

    let { publishPosts } = posts;

    return (
        <>
            {publishPosts.length > 0 ? (
                publishPosts.map((post) => <PostItem key={post._id} {...post} />)
            ) : (
                <h1>شما پستی منتشر نکرده‌اید.</h1>
            )}
        </>
    );
};

export default Published;

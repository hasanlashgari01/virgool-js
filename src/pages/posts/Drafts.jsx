import PostItem from "../../components/modules/PostItem";
import { usePosts } from "../../context/PostsContext";

const Drafts = () => {
    const [posts] = usePosts();

    let { draftPosts } = posts;

    return (
        <>
            {draftPosts.length > 0 ? (
                draftPosts.map((post) => <PostItem key={post._id} {...post} />)
            ) : (
                <h1>شما هیچ پیش‌نویسی ندارید.</h1>
            )}
        </>
    );
};

export default Drafts;

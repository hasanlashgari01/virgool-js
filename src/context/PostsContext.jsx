import { createContext, useContext, useState } from "react";

export const PostsContext = createContext();

const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState({ draftPosts: [], publishPosts: [] });

    return <PostsContext.Provider value={[posts, setPosts]}>{children}</PostsContext.Provider>;
};

export const usePosts = () => {
    const [posts, setPosts] = useContext(PostsContext);

    return [posts, setPosts];
};

export default PostsProvider;

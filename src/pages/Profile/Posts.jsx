import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorMsg from "../../components/modules/ErrorMsg";
import Post from "../../layouts/Profile/Post";
import { getUserProfile } from "../../services/virgoolApi";

const Posts = () => {
    const { username } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(getUserProfile(username.slice(1))).then(({ data }) => {
            setPosts(data.postsOfUser);
        });
    }, []);

    return (
        <ul className="flex flex-col gap-5 xl:items-center">
            {posts.length > 0 ? (
                posts.map((post) => <Post key={post._id} {...post} />)
            ) : (
                <ErrorMsg msg="لیست پست ها خالی می باشد" />
            )}
        </ul>
    );
};

export default Posts;

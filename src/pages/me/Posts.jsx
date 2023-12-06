import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../../layouts/Profile/Post";
import { getUserProfile } from "../../services/virgoolApi";

const Likes = () => {
    const { username } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(getUserProfile(username.slice(1))).then(({ data }) => {
            setPosts(data.postsOfUser);
        });
    }, []);

    return (
        <ul className="flex flex-col gap-5 xl:items-center">
            {posts.map((post) => (
                <Post key={post._id} {...post} />
            ))}
        </ul>
    );
};

export default Likes;

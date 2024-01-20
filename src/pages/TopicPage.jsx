import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorMsg from "../components/modules/ErrorMsg";
import SelectedPost from "../components/templates/SelectedPost";
import Header from "../layouts/Header";
import { apiRequests } from "../services/axios/config";

const TopicPage = () => {
    const { href } = useParams();

    const [topic, setTopic] = useState();
    const [posts, setPosts] = useState();

    useEffect(() => {
        apiRequests(`v1/topic${href}`).then(({ data }) => {
            setTopic(data.topic);
            setPosts(data.posts);
        });
    }, [href]);

    return (
        <>
            <Header />
            <div className="container my-5">
                <h1>
                    دسته بندی : <span className="text-2xl">{topic?.name}</span>
                </h1>
                <ul className="mb-10 mt-10 grid grid-cols-1 gap-10 tb:grid-cols-2">
                    {posts?.length > 0 ? (
                        posts.map((post) => <SelectedPost key={post._id} {...post} isTopic={true} />)
                    ) : (
                        <ErrorMsg msg="پستی در این دسته بندی یافت نشد" />
                    )}
                </ul>
            </div>
        </>
    );
};

export default TopicPage;

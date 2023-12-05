import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../layouts/Header";
import { getTopic } from "../services/virgoolApi";
import SelectedPost from "../components/templates/SelectedPost";
import ErrorMsg from "../components/modules/ErrorMsg";

const TopicPage = () => {
  const { href } = useParams();

  const [topic, setTopic] = useState();
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios.get(getTopic(href)).then(({ data }) => {
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
        <ul className="grid grid-cols-1 mb-10 tb:grid-cols-2 gap-10 mt-10">
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

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../services/virgoolApi";
import PostDetails from "../components/templates/PostDetails";
import Comment from "../components/templates/Comment";
import HeaderTop from "../components/templates/HeaderTop";

const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}v1/post/${postId}`).then(({ data }) => {
      setPost(data.post);
      setComments(data.comments);
    });
  }, []);

  return (
    <div className="my-20">
      <HeaderTop />
      <main className="container">
        <PostDetails post={post} id="post" />
        <div className="mt-10" id="comments">
          <h1 className="text-3xl font-DanaDemiBold mb-10">نظرات</h1>
          <form className="flex flex-col items-start gap-5">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="نظر خود را بنویسید"
              className="bg-gray-200/50 py-2.5 px-5 rounded-lg outline-none w-full tb:w-2/3 h-32"
            ></textarea>
            <input type="submit" value="ثبت نظر" className="btn" />
          </form>
        </div>
        <ul className="w-full tb:w-2/3 mt-10">
          {comments.map((comment) => (
            <Comment key={comment._id} {...comment} />
          ))}
        </ul>
      </main>
      <aside></aside>
    </div>
  );
};

export default PostPage;

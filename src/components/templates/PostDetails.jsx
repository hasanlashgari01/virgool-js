import propTypes from "prop-types";

const PostDetails = ({ post }) => {
  return (
    <>
      <div className="mb-8">
        <div className="flex gap-3 items-center">
          <img
            className="w-10 h-10 object-cover overflow-hidden rounded-full"
            src="/public/images/Ana-de-Armas-300x400.jpg"
            alt=""
          />
          <div>
            <h4 className="font-IRYekanBold">{post.author && post.author.name}</h4>
            <div className="text-sm text-gray-450">
              <span>۱۲ دقیقه</span> - <span>۱۳ روز پیش</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="post__body">
        <h1 className="text-2xl tb:text-3xl font-IRYekanBold">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
      <hr />
    </>
  );
};

PostDetails.propTypes = {
  post: propTypes.any,
};

export default PostDetails;

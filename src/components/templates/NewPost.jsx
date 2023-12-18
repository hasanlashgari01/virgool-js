import { Link } from "react-router-dom";
import propTypes from "prop-types";

const NewPost = ({ classes }) => {
    return (
        <Link to="/post/create" className={`inline-block text-blue-400 hover:text-blue-500 ${classes}`}>
            نوشتن پست جدید
        </Link>
    );
};

NewPost.propTypes = {
    classes: propTypes.string,
};

export default NewPost;

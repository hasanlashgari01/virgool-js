import propTypes from "prop-types";
import { Link } from "react-router-dom";

const PostOverview = ({ title, name }) => {
    return (
        <div className="flex items-center gap-2">
            <img
                src="https://files.virgool.io/upload/users/136448/avatar/8TG6HM.jpeg?height=120&width=120"
                alt=""
                className="h-9 w-9 rounded-full"
            />
            <div className="grid gap-0.5 text-sm">
                <Link className="line-clamp-1 font-IRYekanMedium">{title}</Link>
                <Link className="line-clamp-1 text-gray-450">{name}</Link>
            </div>
        </div>
    );
};

PostOverview.propTypes = {
    title: propTypes.string,
    name: propTypes.string,
};

export default PostOverview;

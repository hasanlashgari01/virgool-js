import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const PostItem = ({ isPublished, title }) => {
    const isPub = isPublished ? "منتشر شده" : "پیش نویس";

    return (
        <div className="border-b pb-5">
            <h1 className="mb-2 text-2xl">{title ? title : "بدون عنوان"}</h1>
            <div className="flex items-center gap-1.5 text-sm text-gray-500">
                <span>آخرین ویرایش :</span>
                <span>۲ هفته پیش</span> {""}
                <span>(۱ کلمه)</span>
                <div className="relative mr-2 inline-block">
                    <span>
                        <IoIosArrowDown size={18} />
                    </span>
                    <ul className="absolute mt-2 grid w-36 gap-2 rounded-sm bg-slate-50 px-4 py-3 text-xs shadow-md">
                        <Link>ویرایش {isPub}</Link>
                        <hr />
                        <Link>حذف {isPub}</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

PostItem.propTypes = {
    isPublished: propTypes.bool,
};

export default PostItem;

import { FaCheckCircle } from "react-icons/fa";
import { MdCancel, MdDriveFileRenameOutline } from "react-icons/md";
import propTypes from "prop-types";

const EditButton = ({ isShow, setIsShow, btnHandler }) => {
    return (
        <div className="flex flex-col space-y-2">
            {!isShow && (
                <span
                    className="w-fit flex gap-3 self-start items-center bg-transparent py-1.5 px-3 border rounded-md cursor-pointer"
                    onClick={btnHandler}
                >
                    <button className="border-none outline-none">ویرایش</button>
                    <MdDriveFileRenameOutline size={18} />
                </span>
            )}
            {isShow && (
                <div className="flex gap-5">
                    <div className="flex gap-3 self-start items-center bg-blue-50 hover:bg-blue-100 text-blue-600 py-1.5 px-3 border border-blue-50 hover:border-blue-100 rounded-md cursor-pointer transition-colors">
                        <button>ذخیره</button>
                        <FaCheckCircle size={18} />
                    </div>
                    <div
                        className="flex gap-3 self-start items-center bg-red-50 hover:bg-red-100 text-red-600 py-1.5 px-3 border border-red-50 hover:border-red-100 rounded-md cursor-pointer transition-colors"
                        onClick={() => setIsShow(false)}
                    >
                        <button>منصرف شدم</button>
                        <MdCancel size={18} />
                    </div>
                </div>
            )}
        </div>
    );
};

EditButton.propTypes = {
    isShow: propTypes.bool,
    setIsShow: propTypes.func,
    btnHandler: propTypes.func,
};

export default EditButton;

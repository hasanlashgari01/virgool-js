import { FaCheckCircle } from "react-icons/fa";
import { MdCancel, MdDriveFileRenameOutline } from "react-icons/md";
import propTypes from "prop-types";

const EditButton = ({ isShow, setIsShow, btnHandler }) => {
    return (
        <div className="flex flex-col space-y-2">
            {!isShow && (
                <div
                    className="w-fit flex gap-3 self-start items-center py-1.5 px-3 border rounded-md cursor-pointer"
                    onClick={btnHandler}
                >
                    <input type="submit" value="ویرایش" className="border-none outline-none" />
                    <MdDriveFileRenameOutline size={18} />
                </div>
            )}
            {isShow && (
                <div className="flex gap-5">
                    <div className="flex gap-3 self-start items-center bg-blue-50 text-blue-500 py-1.5 px-3 border rounded-md cursor-pointer">
                        <input type="button" value="ذخیره" />
                        <FaCheckCircle size={18} />
                    </div>
                    <div
                        className="flex gap-3 self-start items-center bg-red-50 text-red-500 py-1.5 px-3 border rounded-md cursor-pointer"
                        onClick={() => setIsShow(false)}
                    >
                        <input type="button" value="منصرف شدم" />
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

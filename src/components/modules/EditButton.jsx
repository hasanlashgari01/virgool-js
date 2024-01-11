import { FaCheckCircle } from "react-icons/fa";
import { MdCancel, MdDriveFileRenameOutline } from "react-icons/md";
import propTypes from "prop-types";
import axios from "axios";
import { BASE_URL } from "../../services/virgoolApi";
import toast from "react-hot-toast";

const EditButton = ({ userDetails, isShow, setIsShow, btnHandler }) => {
    console.log(userDetails);
    const saveHandler = (url) => {
        axios
            .put(`${BASE_URL}v1/user/me/name`, { _id: "652173368b66c7ad1d5ce5be", name: "سعیدی راد" })
            .then((res) => {
                if ((res.status == 200) | 201) {
                    toast.success("اطلاعات با موفقیت آپدیت شد.");
                }
            })
            .catch((err) => console.log(err.response.data));
    };

    return (
        <div className="flex flex-col space-y-2 py-3">
            {!isShow && (
                <span
                    className="flex w-fit cursor-pointer items-center gap-3 self-start rounded-md border bg-transparent px-3 py-1.5"
                    onClick={btnHandler}
                >
                    <button className="border-none outline-none">ویرایش</button>
                    <MdDriveFileRenameOutline size={18} />
                </span>
            )}
            {isShow && (
                <div className="flex gap-5">
                    <div
                        className="flex cursor-pointer items-center gap-3 self-start rounded-md border border-blue-50 bg-blue-50 px-3 py-1.5 text-blue-600 transition-colors hover:border-blue-100 hover:bg-blue-100"
                        onClick={saveHandler}
                    >
                        <button>ذخیره</button>
                        <FaCheckCircle size={18} />
                    </div>
                    <div
                        className="flex cursor-pointer items-center gap-3 self-start rounded-md border border-red-50 bg-red-50 px-3 py-1.5 text-red-600 transition-colors hover:border-red-100 hover:bg-red-100"
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

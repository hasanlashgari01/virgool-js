import { BiRename } from "react-icons/bi";
import { FaRegTrashCan } from "react-icons/fa6";

const TableAction = ({ id, title, category, setIsShow, itemDetails, setItemDetails }) => {
    const removeHandler = () => {
        setItemDetails({ id, title, category });
        setIsShow(true);
    };

    return (
        <>
            <td className="flex justify-evenly gap-5">
                <BiRename size={20} className="cursor-pointer rounded-md text-green-500" />
                <FaRegTrashCan
                    size={20}
                    className="cursor-pointer rounded-md text-red-500"
                    onClick={() => removeHandler()}
                />
            </td>
        </>
    );
};

export default TableAction;

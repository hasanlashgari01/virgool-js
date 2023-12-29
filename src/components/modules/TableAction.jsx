import { FaRegTrashCan } from "react-icons/fa6";
import { BiRename } from "react-icons/bi";

const TableAction = () => {
    return (
        <td className="flex justify-around gap-5">
            <BiRename size={20} className="cursor-pointer text-green-500" />
            <FaRegTrashCan size={20} className="cursor-pointer text-red-500" />
        </td>
    );
};

export default TableAction;

import { BiRename } from "react-icons/bi";
import { FaRegTrashCan } from "react-icons/fa6";

const TableAction = ({ id, name, href, category, setIsEdit, setIsDelete, setItemDetails }) => {
    const updateHandler = () => {
        setItemDetails({ id, name, href, category });
        setIsEdit(true);
    };

    const removeHandler = () => {
        setItemDetails({ id, name, href, category });
        setIsDelete(true);
    };

    return (
        <>
            <td className="flex justify-evenly gap-5">
                <BiRename
                    size={20}
                    className="cursor-pointer rounded-md text-green-500"
                    onClick={() => updateHandler()}
                />
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

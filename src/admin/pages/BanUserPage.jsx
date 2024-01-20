import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import DeleteBox from "../../components/modules/DeleteBox";
import { apiRequestsAccess } from "../../services/axios/config";

const BanUserPage = () => {
    const [bannedUsers, setBannedUsers] = useState([]);
    const [itemDetails, setItemDetails] = useState({ id: null, username: null, href: null, category: null });
    const [isShowDeleteBox, setIsShowDeleteBox] = useState(false);

    const fetchBannedUsers = () => {
        apiRequestsAccess(`v2/admin/user/banned`).then(({ data: { users } }) => setBannedUsers(users));
    };

    useEffect(() => {
        fetchBannedUsers();
    }, []);

    return (
        <div className="flex h-fit flex-1 flex-col">
            <table className="mt-5 h-fit flex-1 border-separate border border-slate-300">
                <thead className="border-collapse border border-slate-500 bg-slate-600 font-IRYekanLight text-sm text-white">
                    <tr className="child:px-4 child:py-2">
                        <th>شماره تلفن</th>
                        <th>بیشتر</th>
                    </tr>
                </thead>
                <tbody>
                    {bannedUsers.map(({ _id, phone }) => (
                        <tr className="child:py-2 child:text-center" key={_id}>
                            <td>{phone}</td>
                            <td className="grid cursor-pointer place-content-center">
                                <BiTrash
                                    size={20}
                                    className="cursor-pointer rounded-md text-red-500"
                                    // onClick={() => showModal({ id: _id, username })}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {!bannedUsers.length && <h1 className="text-center">کاربری در سایت وجود ندارد</h1>}
            <DeleteBox
                title={itemDetails.username}
                category="کاربر"
                isBan={true}
                isDelete={isShowDeleteBox}
                setIsDelete={setIsShowDeleteBox}
            />
        </div>
    );
};

export default BanUserPage;

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import DeleteBox from "../../components/modules/DeleteBox";
import { getTokenFromLocalStorage } from "../../services/func";
import { BASE_URL } from "../../services/virgoolApi";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [itemDetails, setItemDetails] = useState({ id: null, username: null, href: null, category: null });
    const [isShowDeleteBox, setIsShowDeleteBox] = useState(false);

    const fetchUsers = () => {
        axios
            .get(`${BASE_URL}v2/admin/user`, {
                headers: { Authorization: `Bearer ${getTokenFromLocalStorage().token}` },
            })
            .then(({ data: { users } }) => setUsers(users));
    };

    const showModal = (id, title) => {
        setIsShowDeleteBox(true);
        setItemDetails(id, title);
    };

    const deleteHandler = () => {
        axios
            .get(`${BASE_URL}v1/admin/user/ban/${itemDetails.id}`, {
                headers: { Authorization: `Bearer ${getTokenFromLocalStorage().token}` },
            })
            .then((res) => {
                setIsShowDeleteBox(false);
                if (res.status == 200) {
                    fetchUsers();
                    toast.success(`کاربر ${itemDetails.username} با موفقیت بن شد.`);
                }
            })
            .catch((err) => err && toast.error(err.response.data.message));
    };

    const changeRoleHandler = (id, role) => {
        axios
            .get(`${BASE_URL}v1/admin/user/role/${id}`, {
                headers: { Authorization: `Bearer ${getTokenFromLocalStorage().token}` },
            })
            .then((res) => {
                if (res.status == 200) {
                    fetchUsers();
                    toast.success(`نقش کاربر به ${role === "ADMIN" ? "کاربر" : "مدیر"} تغییر کرد`);
                }
            })
            .catch((err) => err && toast.error(err.response.data.message));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="flex h-fit flex-1 flex-col">
            <table className="mt-5 h-fit flex-1 border-separate border border-slate-300">
                <thead className="border-collapse border border-slate-500 bg-slate-600 font-IRYekanLight text-sm text-white">
                    <tr className="child:px-4 child:py-2">
                        <th>عکس</th>
                        <th className="flex-1">نام کاربر</th>
                        <th className="w-24">نقش</th>
                        <th>بیشتر</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(({ _id, cover, name, username, role }) => (
                        <tr className="child:py-2 child:text-center" key={_id}>
                            <td>
                                <img src={cover} alt={`آواتار ${name}`} />
                            </td>
                            <td>
                                <Link to={`/post/${_id}`}>{name}</Link>
                            </td>
                            <td>
                                <span
                                    className={`cursor-pointer rounded-md px-2 py-1 text-white 
                                        ${role === "ADMIN" ? "bg-green-500" : "bg-red-500"}`}
                                    onClick={() => changeRoleHandler(_id, role)}
                                >
                                    {role === "ADMIN" ? "مدیر" : "کاربر"}
                                </span>
                            </td>
                            <td className="grid cursor-pointer place-content-center">
                                <BiTrash
                                    size={20}
                                    className="cursor-pointer rounded-md text-red-500"
                                    onClick={() => showModal({ id: _id, username })}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {!users.length && <h1 className="text-center">کاربری در سایت وجود ندارد</h1>}
            <DeleteBox
                title={itemDetails.username}
                category="کاربر"
                isBan={true}
                isDelete={isShowDeleteBox}
                setIsDelete={setIsShowDeleteBox}
                deleteHandler={deleteHandler}
            />
        </div>
    );
};

export default UsersPage;

import axios from "axios";
import { useEffect, useState } from "react";
import { FaBan, FaRegUser } from "react-icons/fa";
import { GrBlog, GrUserAdmin } from "react-icons/gr";
import Box from "../../components/modules/Box";
import { TOKEN_ADMIN, getDetails } from "../../services/virgoolApi";

const IndexPage = () => {
    const [infos, setInfos] = useState([]);
    const { users, admins, posts, usersBanned } = infos;

    useEffect(() => {
        axios
            .get(getDetails(), { headers: { Authorization: `Bearer ${TOKEN_ADMIN}` } })
            .then((res) => setInfos(res.data))
            .catch((err) => err);
    }, []);

    return (
        <div className="flex flex-1 flex-wrap gap-10">
            <div className="grid flex-auto grid-cols-2 gap-7 xl:flex-1">
                <Box count={users?.count} title="کاربران">
                    <FaRegUser size={20} />
                </Box>
                <Box count={admins?.count} title="ادمین ها">
                    <GrUserAdmin size={20} />
                </Box>
                <Box count={posts?.count} title="پست ها">
                    <GrBlog size={20} />
                </Box>
                <Box count={usersBanned?.count} title="کاربران بن شده">
                    <FaBan size={20} />
                </Box>
            </div>
            <div className="w-60 min-w-max bg-red-100 font-DanaDemiBold">نمودار</div>
        </div>
    );
};

export default IndexPage;

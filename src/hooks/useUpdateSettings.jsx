import { useEffect, useState } from "react";
import { apiRequestsAccess } from "../services/axios/config";
import toast from "react-hot-toast";

const useUpdateSettings = () => {
    const [data, setData] = useState({});

    const fetchInfo = async () => {
        const { data } = await apiRequestsAccess.get("v1/user/me/settings");
        setData(data);
    };

    const updateHandler = (data) => {
        apiRequestsAccess
            .put("v1/user/me/settings", data)
            .then((res) => {
                if (res.status == 201) {
                    toast.success("اطلاعات به روز شد.");
                }
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            });
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    return { data, setData, updateHandler };
};

export default useUpdateSettings;

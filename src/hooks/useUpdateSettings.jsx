import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, getUser, putUser } from "../services/virgoolApi";
import { getTokenFromLocalStorage } from "../services/func";

const useUpdateSettings = () => {
    const [data, setData] = useState({});

    const fetchInfo = async () => {
        const { data } = await axios.get(getUser(), {
            headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
        });
        setData(data);
    };

    const updateHandler = (updateData) => {
        console.log(updateData);
        axios
            .put(`${BASE_URL}v1/user/me/settings`, updateData, {
                headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    return { data, setData, updateHandler };
};

export default useUpdateSettings;

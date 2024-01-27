import { useEffect, useState } from "react";
import { apiRequests } from "../services/axios/config";

const useGetAxios = ({ url }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await apiRequests(url);

        setData(response.data);
    };

    return [data, setData];
};

export default useGetAxios;

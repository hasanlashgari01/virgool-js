import axios from "axios";
import { useEffect, useState } from "react";

const useGetAxios = ({ url }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await axios(`${url}`);

        setData(response.data);
    };

    return [data, setData];
};

export default useGetAxios;

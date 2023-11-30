import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../services/virgoolApi";

const useGetAxios = ({ url }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const response = await axios.get(`${BASE_URL}${url}`);

		setData(response.data);
	};

	return [data, setData];
};

export default useGetAxios;

import axios from "axios";
import { getTokenFromLocalStorage } from "../func";

const BASE_URL = "http://localhost:4000/";

const apiRequests = axios.create({
    baseURL: BASE_URL,
});

const apiRequestsAccess = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()?.token}`,
    },
});

export { apiRequests, apiRequestsAccess };

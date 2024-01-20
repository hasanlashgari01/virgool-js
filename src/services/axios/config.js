import axios from "axios";
import { getTokenFromLocalStorage } from "../func";

const BASE_URL = "http://localhost:4000/";

const apiRequests = axios.create({
    baseURL: BASE_URL,
});

const apiRequestsAccess = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage().token}`,
    },
});

const apiGetMe = axios.create({
    baseURL: `${BASE_URL}v1/auth/getMe`,
    headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()?.token}`,
    },
});

export { apiGetMe, apiRequests, apiRequestsAccess };

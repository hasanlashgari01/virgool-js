const BASE_URL = "http://localhost:4000/";
const TOKEN_ADMIN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjVkNmU5OGMxZDc4ODA4OTczNzllOSIsImlhdCI6MTcwMTUzMzUwMCwiZXhwIjoxNzA0MTI1NTAwfQ.0IU_vC-zWZaqs-IUNvKTyCBCIIX1krjZsROGIlK42DI";

const authFetch = () => `${BASE_URL}v1/auth/`;
const getTopics = () => `${BASE_URL}v1/topic`;
const getTopic = (href) => `${BASE_URL}v1/topic/${href}`;
const getUserProfile = (username) => `${BASE_URL}v1/user/${username}`;

export { BASE_URL, TOKEN_ADMIN, authFetch, getTopics, getTopic, getUserProfile };

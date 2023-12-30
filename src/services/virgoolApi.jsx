const BASE_URL = "http://localhost:4000/";
const TOKEN_ADMIN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjE3MzM2OGI2NmM3YWQxZDVjZTViZSIsImlhdCI6MTcwMzQ5NjQzMiwiZXhwIjoxNzA2MDg4NDMyfQ.Hej9ZXUawa_acN05GjwX4qOQtVpJLt0nCxki85oiC6Y";

const authFetch = () => `${BASE_URL}v1/auth/`;
const getTopics = () => `${BASE_URL}v1/topic`;
const getTopic = (href) => `${BASE_URL}v1/topic/${href}`;
const getUserProfile = (username) => `${BASE_URL}v1/user/profile/${username}`;
const getUser = () => `${BASE_URL}v1/user/me/settings`;
const getDetails = () => `${BASE_URL}v2/admin/index`;

const deleteTopic = (id) => `${BASE_URL}v1/admin/topic/${id}`;

export { BASE_URL, TOKEN_ADMIN, authFetch, getTopics, getTopic, getUserProfile, getUser, getDetails, deleteTopic };

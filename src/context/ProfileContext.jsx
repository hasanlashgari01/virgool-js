import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { apiGetMe, apiRequestsAccess } from "../services/axios/config";
import { getTokenFromLocalStorage } from "../services/func";

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
    const [data, setData] = useState({
        isLoading: true,
        user: {},
        followers: [],
        followings: [],
        posts: [],
        publishedPosts: [],
        isYourProfile: false,
    });

    const { username } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (getTokenFromLocalStorage()) {
            apiGetMe()
                .then((res) => {
                    if (res.status == 200) {
                        username.slice(1) === res.data.username
                            ? setData({ ...data, isYourProfile: true })
                            : setData({ ...data, isYourProfile: false });

                        location.pathname.split("/").splice(1).length === 1 && navigate("posts");
                    }
                })
                .catch((err) => err);
        }
    }, []);

    useEffect(() => {
        if (!username.startsWith("@")) {
            navigate("/");
        } else {
            apiRequestsAccess(`/v1/user/profile/${username.slice(1)}`).then(({ data }) => {
                setData({
                    ...data,
                    isLoading: false,
                    user: data.findUser,
                    followers: data.followers.users,
                    followings: data.followings.users,
                    posts: data.postsOfUser,
                    publishedPosts: data.publishedPostsOfUser,
                });
            });
        }
    }, []);

    return <ProfileContext.Provider value={data}>{children}</ProfileContext.Provider>;
};

const useProfile = () => {
    const { isLoading, user, followers, followings, isYourProfile, posts, publishedPosts } = useContext(ProfileContext);
    return { isLoading, user, followers, followings, isYourProfile, posts, publishedPosts };
};

export default ProfileProvider;
export { useProfile };

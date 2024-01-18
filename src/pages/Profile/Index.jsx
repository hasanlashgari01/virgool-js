import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import HeaderTop from "../../components/templates/HeaderTop";
import Navigation from "../../layouts/Profile/Navigation";
import UserDetails from "../../layouts/Profile/UserDetails";
import { getTokenFromLocalStorage } from "../../services/func";
import { getMe, getUserProfile } from "../../services/virgoolApi";

const UserProfile = () => {
    const { username } = useParams();
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState();
    const [isYourProfile, setIsYourProfile] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (!username.startsWith("@")) {
            navigate("/");
        } else {
            axios.get(getUserProfile(username.slice(1))).then(({ data }) => {
                setUserDetails(data.findUser);
                setPosts(data.postsOfUser);
            });
        }
    }, []);

    useEffect(() => {
        if (getTokenFromLocalStorage()) {
            axios
                .get(getMe(), { headers: { Authorization: `Bearer ${getTokenFromLocalStorage()?.token}` } })
                .then((res) => {
                    if (res.status == 200) {
                        username.slice(1) === res.data.username ? setIsYourProfile(true) : setIsYourProfile(false);
                    }
                })
                .catch((err) => err.response);
        }
    }, []);

    return (
        <>
            <HeaderTop />
            <div className="container flex flex-col items-center justify-center overflow-hidden">
                <UserDetails {...userDetails} isYourProfile={isYourProfile} />
                <Navigation />
                <div className="mb-5 h-[1px] w-screen bg-gray-300"></div>
                <Outlet posts={posts} />
            </div>
        </>
    );
};

export default UserProfile;

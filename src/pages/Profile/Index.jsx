import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { getUserProfile } from "../../services/virgoolApi";
import Navigation from "../../layouts/Profile/Navigation";
import HeaderTop from "../../components/templates/HeaderTop";
import UserDetails from "../../layouts/Profile/UserDetails";

const UserProfile = () => {
    const { username } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (!username.startsWith("@")) {
            navigate("/");
        } else {
            axios.get(getUserProfile(username.slice(1))).then(({ data }) => {
                setUser(data.findUser);
                setPosts(data.postsOfUser);
            });
        }
    }, []);

    return (
        <>
            <HeaderTop />
            <div className="container flex flex-col items-center justify-center overflow-hidden">
                <UserDetails />
                <Navigation />
                <div className="mb-5 h-[1px] w-screen bg-gray-300"></div>
                <Outlet />
            </div>
        </>
    );
};

export default UserProfile;

import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import HeaderTop from "../../components/templates/HeaderTop";
import UserDetails from "../../layouts/me/UserDetails";
import { getUserProfile } from "../../services/virgoolApi";

const Index = () => {
    const { username } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState();

    useEffect(() => {
        if (!username.startsWith("@")) {
            navigate("/");
        } else {
            axios.get(getUserProfile(username.slice(1))).then(({ data }) => {
                console.log(data);
                setUser(data.findUser);
            });
        }
    }, []);

    return (
        <>
            <HeaderTop />
            <div>
                <UserDetails {...user} />
                <Outlet />
            </div>
        </>
    );
};

export default Index;

import { Outlet } from "react-router-dom";
import HeaderTop from "../../components/templates/HeaderTop";
import ProfileProvider from "../../context/ProfileContext";
import Navigation from "../../layouts/Profile/Navigation";
import UserDetails from "../../layouts/Profile/UserDetails";

const UserProfile = () => {
    return (
        <ProfileProvider>
            <HeaderTop />
            <div className="container flex flex-col items-center justify-center overflow-hidden">
                <UserDetails />
                <Navigation />
                <div className="mb-5 h-[1px] w-screen bg-gray-300"></div>
                <Outlet />
            </div>
        </ProfileProvider>
    );
};

export default UserProfile;

import { Link } from "react-router-dom";

const ProfileSocialMedia = ({link, value, children}) => {
    return (
        <>
            {value && (
                <Link to={`${link}${value}`} target="_blank">
                    {children}
                </Link>
            )}
        </>
    );
};

export default ProfileSocialMedia;

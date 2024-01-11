import propTypes from "prop-types";
import EditInput from "../../components/modules/EditInput";

const AboutMeSection = ({ userDetails, setUserDetails }) => {
    return (
        <div>
            <h1 className="mb-5 border-b border-[#cacaca] pb-5 text-xl lg:text-2xl">درباره شما</h1>
            <div className="mb-28 mt-10 space-y-8">
                <EditInput
                    userDetails={userDetails?.name}
                    setUserDetails={setUserDetails}
                    description="نام نمایشی خود را وارد کنید"
                />
                <EditInput
                    userDetails={userDetails?.biography}
                    setUserDetails={setUserDetails}
                    description="بیوگرافی شما در صفحه پروفایل نمایش داده می شود. حداکثر ۲۰۰ کاراکتر"
                />
                <EditInput
                    image={userDetails.avatar ? userDetails.avatar : "/public/images/Ana-de-Armas-300x400.jpg"}
                    userDetails={userDetails?.avatar}
                    setUserDetails={setUserDetails}
                    description="عکس شما در صفحه پروفایل و پست‌ها نمایش داده می‌شود."
                />
            </div>
        </div>
    );
};

AboutMeSection.propTypes = {
    userDetails: propTypes.any,
    setUserDetails: propTypes.func,
};

export default AboutMeSection;

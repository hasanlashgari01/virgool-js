import propTypes from "prop-types";
import EditInput from "../../components/modules/EditInput";

const AboutMeSection = ({ userDetails, setUserDetails }) => {
    return (
        <div>
            <h1 className="text-xl lg:text-2xl pb-5 mb-5 border-b border-[#cacaca]">درباره شما</h1>
            <div className="mt-10 mb-28 space-y-8">
                <EditInput
                    userDetails={userDetails && userDetails.name}
                    setUserDetails={setUserDetails}
                    description="نام نمایشی خود را وارد کنید"
                />
                <EditInput
                    userDetails={userDetails && userDetails.biography}
                    setUserDetails={setUserDetails}
                    description="بیوگرافی شما در صفحه پروفایل نمایش داده می شود. حداکثر ۲۰۰ کاراکتر"
                />
                <EditInput
                    image="/public/images/Ana-de-Armas-300x400.jpg"
                    userDetails={userDetails && userDetails.biography}
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

import propTypes from "prop-types";
import EditInput from "../../components/modules/EditInput";

const AccountSection = ({ userDetails, setUserDetails }) => {
    return (
        <div>
            <h1 className="text-xl lg:text-2xl pb-5 border-b border-[#cacaca]">حساب کاربری</h1>
            <div className="mt-10 mb-28 space-y-8">
                <EditInput
                    userDetails={userDetails && userDetails.username}
                    setUserDetails={setUserDetails}
                    title="نام کاربری"
                    dir={true}
                />
                <EditInput
                    userDetails={userDetails && userDetails.email}
                    setUserDetails={setUserDetails}
                    title="ایمیل"
                    dir={true}
                />
                <EditInput
                    userDetails={userDetails && userDetails.phone}
                    setUserDetails={setUserDetails}
                    title="شماره موبایل"
                    dir={true}
                />
                <EditInput
                    userDetails={userDetails && userDetails.password}
                    setUserDetails={setUserDetails}
                    title="تغییر رمز عبور"
                    dir={true}
                />
            </div>
        </div>
    );
};

AccountSection.propTypes = {
    userDetails: propTypes.any,
    setUserDetails: propTypes.func,
};

export default AccountSection;

import propTypes from "prop-types";
import EditInput from "../../components/modules/EditInput";

const AccountSection = ({ userDetails, setUserDetails }) => {
    return (
        <div>
            <h1 className="border-b border-[#cacaca] pb-5 text-xl lg:text-2xl">حساب کاربری</h1>
            <div className="mb-28 mt-10 space-y-8">
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

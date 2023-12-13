import { Unavailable } from "../../components/modules/Unavailable";

const EmailNotification = () => {
    return (
        <div className="mt-20">
            <h1 className="text-xl lg:text-2xl pb-5 border-b border-[#cacaca]">ایمیل نوتیفیکیشن</h1>
            <div className="space-y-10">
                <Unavailable />
            </div>
        </div>
    );
};

export default EmailNotification;

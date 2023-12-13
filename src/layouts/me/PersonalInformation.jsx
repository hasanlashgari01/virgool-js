import EditInput from "../../components/modules/EditInput";
import InputRadio from "../../components/modules/InputRadio";
import InputRadioWrapper from "../../components/modules/InputRadioWrapper";

const PersonalInformation = () => {
    return (
        <div className="mt-20 space-y-5">
            <h1 className="text-xl lg:text-2xl pb-5 border-b border-[#cacaca]">اطلاعات شخصی</h1>
            <div className="mt-10 mb-28 space-y-8">
                <InputRadioWrapper type="gender" title="جنسیت">
                    <InputRadio id="women" name="زن" />
                    <InputRadio id="other" name="سایر" />
                    <InputRadio id="man" name="مرد" />
                </InputRadioWrapper>
                <EditInput title="پروفایل توئیتر" dir={true} />
                <EditInput title="پروفایل لینکدین" dir={true} />
            </div>
        </div>
    );
};

export default PersonalInformation;

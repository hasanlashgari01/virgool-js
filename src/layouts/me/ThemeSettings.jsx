import InputRadio from "../../components/modules/InputRadio";
import InputRadioWrapper from "../../components/modules/InputRadioWrapper";

const ThemeSettings = () => {
    return (
        <div className="mt-20">
            <h1 className="text-xl lg:text-2xl pb-5 border-b border-[#cacaca]">تنظیمات حالت شب</h1>
            <div className="mt-10 mb-28 space-y-8">
                <InputRadioWrapper type="theme" title="حالت شب">
                    <InputRadio id="dark" name="شب" />
                    <InputRadio id="auto" name="خودکار" />
                    <InputRadio id="light" name="روز" />
                </InputRadioWrapper>
                <InputRadioWrapper type="showTheme" title="نمایش دکمه خاموش/روشن در منوی پروفایل کاربری">
                    <InputRadio id="yes" name="بله" />
                    <InputRadio id="no" name="خیر" />
                </InputRadioWrapper>
            </div>
        </div>
    );
};

export default ThemeSettings;

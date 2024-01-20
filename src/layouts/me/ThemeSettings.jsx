import { useEffect, useState } from "react";
import InputRadio from "../../components/modules/InputRadio";
import InputRadioWrapper from "../../components/modules/InputRadioWrapper";
import { apiRequestsAccess } from "../../services/axios/config";

const ThemeSettings = () => {
    const [themeMode, setThemeMode] = useState();
    const [themeStatus, setThemeStatus] = useState();

    useEffect(() => {
        apiRequestsAccess("v1/user/me/settings").then((res) => {
            setThemeMode(res.data.themeMode.toLowerCase());
            setThemeStatus(res.data.themeStatus);
        });
    }, []);

    return (
        <div className="mt-20">
            <h1 className="border-b border-[#cacaca] pb-5 text-xl lg:text-2xl">تنظیمات حالت شب</h1>
            <div className="mb-28 mt-10 space-y-8">
                <InputRadioWrapper type="themeMode" title="حالت شب" value={themeMode}>
                    <InputRadio type="themeMode" id="dark" name="شب" />
                    <InputRadio type="themeMode" id="auto" name="خودکار" />
                    <InputRadio type="themeMode" id="light" name="روز" />
                </InputRadioWrapper>
                <InputRadioWrapper
                    type="themeStatus"
                    value={themeStatus}
                    title="نمایش دکمه خاموش/روشن در منوی پروفایل کاربری"
                >
                    <InputRadio type="themeStatus" id="1" name="بله" />
                    <InputRadio type="themeStatus" id="0" name="خیر" />
                </InputRadioWrapper>
            </div>
        </div>
    );
};

export default ThemeSettings;

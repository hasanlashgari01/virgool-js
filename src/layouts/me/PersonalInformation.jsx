import axios from "axios";
import { useEffect, useState } from "react";
import EditInput from "../../components/modules/EditInput";
import InputRadio from "../../components/modules/InputRadio";
import InputRadioWrapper from "../../components/modules/InputRadioWrapper";
import { getTokenFromLocalStorage } from "../../services/func";
import { getUser } from "../../services/virgoolApi";

const PersonalInformation = () => {
    const [value, setValue] = useState();

    useEffect(() => {
        axios
            .get(getUser(), {
                headers: { Authorization: `Bearer ${getTokenFromLocalStorage().token}` },
            })
            .then((res) => {
                setValue(res.data.gender.toLowerCase());
            });
    }, []);

    return (
        <div className="mt-20 space-y-5">
            <h1 className="border-b border-[#cacaca] pb-5 text-xl lg:text-2xl">اطلاعات شخصی</h1>
            <div className="mb-28 mt-10 space-y-8">
                <InputRadioWrapper value={value} type="gender" title="جنسیت">
                    <InputRadio type="gender" id="women" name="زن" />
                    <InputRadio type="gender" id="other" name="سایر" />
                    <InputRadio type="gender" id="man" name="مرد" />
                </InputRadioWrapper>
                <EditInput title="پروفایل توئیتر" dir={true} />
                <EditInput title="پروفایل لینکدین" dir={true} />
            </div>
        </div>
    );
};

export default PersonalInformation;

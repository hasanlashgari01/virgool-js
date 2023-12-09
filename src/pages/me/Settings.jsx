import { useState } from "react";
import Aside from "../../layouts/me/Aside";
import Main from "../../layouts/me/Main";

const Settings = () => {
    const [topPosition, setTopPosition] = useState([]);

    return (
        <div className="flex gap-10 items-start">
            <Aside topPosition={topPosition} />
            <Main topPosition={topPosition} setTopPosition={setTopPosition} />
        </div>
    );
};

export default Settings;

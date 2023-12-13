import axios from "axios";
import propTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { TOKEN_ADMIN, getUser } from "../../services/virgoolApi";
import AboutMeSection from "./AboutMeSection";
import AccountSection from "./AccountSection";
import EmailNotification from "./EmailNotification";
import PersonalInformation from "./PersonalInformation";
import ThemeSettings from "./ThemeSettings";
import AdvancedSettings from "./AdvancedSettings";

const Main = ({ setTopPosition }) => {
    const [userDetails, setUserDetails] = useState();

    const mainRef = useRef();

    useEffect(() => {
        setTopPosition([]);

        Array.from(mainRef.current.children).forEach((element, index) => {
            setTopPosition((prevTopPosition) => [
                ...prevTopPosition,
                { id: index + 1, text: element.firstChild.textContent, top: element.offsetTop - 75 },
            ]);
        });
    }, []);

    useEffect(() => {
        axios
            .get(getUser(), { headers: { Authorization: `Bearer ${TOKEN_ADMIN}` } })
            .then(({ data }) => {
                setUserDetails(data);
            })
            .catch((err) => console.log(err.response.data.message));
    }, []);

    return (
        <div className="w-full" ref={mainRef}>
            <AboutMeSection userDetails={userDetails} setUserDetails={setUserDetails} />
            <AccountSection userDetails={userDetails} setUserDetails={setUserDetails} />
            <PersonalInformation />
            <ThemeSettings />
            <EmailNotification />
            <AdvancedSettings />
        </div>
    );
};

Main.propTypes = {
    setTopPosition: propTypes.func,
};

export default Main;

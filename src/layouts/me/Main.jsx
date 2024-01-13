import propTypes from "prop-types";
import { useEffect, useRef } from "react";
import AboutMeSection from "./AboutMeSection";
import AccountSection from "./AccountSection";
import AdvancedSettings from "./AdvancedSettings";
import EmailNotification from "./EmailNotification";
import PersonalInformation from "./PersonalInformation";
import ThemeSettings from "./ThemeSettings";

const Main = ({ setTopPosition }) => {
    const mainRef = useRef();

    useEffect(() => {
        setTopPosition([]);

        Array.from(mainRef.current.children).forEach((element, index) => {
            setTopPosition((prevTopPosition) => [
                ...prevTopPosition,
                { id: index + 1, text: element.firstChild.textContent, top: element.offsetTop - 75, isInView: false },
            ]);
        });
    }, []);

    return (
        <div className="w-full" ref={mainRef}>
            <AboutMeSection />
            <AccountSection />
            <PersonalInformation />
            <ThemeSettings />
            <EmailNotification />
            <AdvancedSettings />
        </div>
    );
};

Main.propTypes = {
    topPosition: propTypes.array,
    setTopPosition: propTypes.func,
};

export default Main;

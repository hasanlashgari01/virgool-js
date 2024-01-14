const OtpInput = () => {
    const changeHandler = (e) => {
        let value = e.target.value;
        let nextElem = e.target.nextElementSibling;

        if (value.length == 1) {
            // if nextElement exist, focus nextElement
            nextElem && nextElem.focus();
        } else if (value.length > 1) {
            // if element value > 1 clear other numbers and focus nextElement
            e.target.value = value.slice(0, 1);
            nextElem && nextElem.focus();
        }
    };

    return (
        <input
            type="number"
            inputMode="numeric"
            pattern="[0-9]+"
            className="otp__number"
            onChange={(e) => changeHandler(e)}
        />
    );
};

export default OtpInput;

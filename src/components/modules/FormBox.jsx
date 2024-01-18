const FormBox = ({ isShow, children }) => {
    return (
        <>
            {isShow && (
                <div className="fixed inset-0 flex items-start justify-center bg-black/30 transition-all z-10">
                    {children}
                </div>
            )}
        </>
    );
};

export default FormBox;

const EditBox = ({ isEdit, children }) => {
    return (
        <>
            {isEdit && (
                <div className="fixed inset-0 flex items-start justify-center bg-black/30 transition-all">
                    {children}
                </div>
            )}
        </>
    );
};

export default EditBox;

const DeleteBox = ({ title, category, isDelete, setIsDelete, deleteHandler }) => {
    const hideBox = () => setIsDelete(false);

    return (
        <>
            {isDelete && (
                <div className="fixed inset-0 grid place-content-center bg-black/30 transition-all">
                    <div className="inline-flex flex-col rounded-lg bg-white px-16 py-8 shadow-xl">
                        <h1 className="text-center font-IRYekanRegular xl:text-lg">
                            آیا مایل به حذف{" "}
                            <span className="font-IRYekanExtraBold">
                                {category} {title}
                            </span>{" "}
                            هستید؟
                        </h1>
                        <div className="mt-6 flex justify-center gap-5 child:cursor-pointer">
                            <span
                                className="form__btn bg-red-600 text-white hover:bg-red-500"
                                onClick={() => deleteHandler()}
                            >
                                حذف
                            </span>
                            <span className="form__btn border-2 border-slate-300 hover:bg-slate-100" onClick={hideBox}>
                                لغو
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeleteBox;

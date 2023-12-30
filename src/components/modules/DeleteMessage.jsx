const DeleteMessage = ({ title, category, isShow, setIsShow, deleteHandler }) => {
    const hideBox = () => setIsShow(false);

    return (
        <>
            {isShow && (
                <div className="fixed inset-0 grid place-content-center bg-black/30 transition-all">
                    <div className="w- inline-flex flex-col rounded-lg bg-white px-16 py-8 shadow-xl">
                        <h1 className="text-center font-IRYekanRegular xl:text-lg">
                            آیا مایل به حذف{" "}
                            <span className="font-IRYekanExtraBold">
                                {category} {title}
                            </span>{" "}
                            هستید؟
                        </h1>
                        <div className="mt-6 flex justify-evenly child:cursor-pointer">
                            <span
                                className="delete__btn bg-red-600 text-white hover:bg-red-500"
                                onClick={() => deleteHandler()}
                            >
                                حذف
                            </span>
                            <span
                                className="delete__btn border-2 border-slate-300 hover:bg-slate-100"
                                onClick={hideBox}
                            >
                                لغو
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeleteMessage;

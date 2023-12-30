const EditBoxFooter = ({ setIsEdit }) => {
    const hideBox = () => setIsEdit(false);

    return (
        <div className="mt-6 flex gap-5 child:cursor-pointer">
            <input
                type="submit"
                value="ذخیره تغییرات"
                className="form__btn cursor-pointer bg-green-600 text-white hover:bg-green-500"
            />
            <button className="form__btn border-2 border-slate-300 hover:bg-slate-100" onClick={hideBox}>
                لغو
            </button>
        </div>
    );
};

export default EditBoxFooter;

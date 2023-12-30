const InputEditBox = ({ type = "text", title, register }) => {
    return (
        <input
            type={type}
            className="inline-flex w-full rounded-sm border px-3 py-1.5 outline-none"
            placeholder={title}
            {...register}
        />
    );
};

export default InputEditBox;

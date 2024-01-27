const InputEditBox = ({ type = "text", title, register, errors }) => {
    return (
        <>
            <input
                type={type}
                className="inline-flex w-full rounded-sm border px-3 py-1.5 outline-none"
                placeholder={title}
                {...register}
            />
            {errors && <span className="text-sm text-red-500">{errors.message}</span>}
        </>
    );
};

export default InputEditBox;

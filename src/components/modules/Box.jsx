const Box = ({ title, count, children }) => {
    return (
        <div className="group flex h-40 select-none flex-col justify-between rounded-3xl bg-white p-4 font-DanaDemiBold transition-colors delay-150 hover:bg-blue-700">
            <div className="flex items-start justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 delay-150 group-hover:bg-white">
                    {children}
                </span>
                <span className="rounded-full bg-green-500 px-3 py-0.5 text-sm text-white">+۲۰</span>
            </div>
            <div>
                <h5 className="text-gray-400 delay-150 group-hover:text-gray-300">تعداد {title}</h5>
                <h1 className="font-DanaBold text-4xl delay-150 group-hover:text-white">{count}</h1>
            </div>
        </div>
    );
};

export default Box;

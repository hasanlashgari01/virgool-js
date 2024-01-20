import ErrorMsg from "../../components/modules/ErrorMsg";
import Post from "../../layouts/Profile/Post";

const Lists = () => {
    const lists = [];

    return (
        <>
            {lists.length > 0 ? (
                lists.map((post) => <Post key={post._id} {...post} />)
            ) : (
                <ErrorMsg msg="لیست خالی می باشد" />
            )}
        </>
    );
};

export default Lists;

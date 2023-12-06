import { useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../../layouts/Profile/Post";
import ErrorMsg from "../../components/modules/ErrorMsg";

const Lists = () => {
    const { username } = useParams();
    const [lists, setLists] = useState([]);

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

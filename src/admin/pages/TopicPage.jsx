import axios from "axios";
import { useEffect, useState } from "react";
import { getTopics } from "../../services/virgoolApi";
import TableAction from "../../components/modules/TableAction";

const TopicPage = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        axios.get(getTopics()).then(({ data }) => setTopics(data));
    }, []);

    return (
        <table className="h-fit flex-1 border-separate border border-slate-300">
            <thead className="border-collapse border border-slate-500 bg-slate-600 font-IRYekanLight text-sm text-white">
                <tr className="child:px-4 child:py-2">
                    <th className="flex-1">اسم</th>
                    <th className="flex-1">آدرس</th>
                    <th className="w-36">عملیات</th>
                </tr>
            </thead>
            <tbody className="">
                {topics.map((topic) => (
                    <tr className="child:py-2 child:text-center" key={topic._id}>
                        <td>{topic.name}</td>
                        <td>{topic.href}</td>
                        <TableAction />
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TopicPage;

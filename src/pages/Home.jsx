import SelectedPosts from "../components/templates/SelectedPosts";
import Aside from "../layouts/Aside";
import Header from "../layouts/Header";
import Main from "../layouts/Main";

const Home = () => {
    return (
        <>
            <Header />
            <main className="container mt-10">
                <SelectedPosts isSelected={true} title="منتخب‌های ویرگول" className="tb:grid-cols-2 gap-10" />
                <hr />
                <div className="flex max-tb:flex-col gap-10 mt-16 mb-96">
                    <Main />
                    <Aside />
                </div>
            </main>
        </>
    );
};

export default Home;

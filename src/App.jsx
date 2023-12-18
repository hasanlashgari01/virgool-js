import { useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { routes } from "./routes/routes.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthContext.jsx";
import PostsProvider from "./context/PostsContext.jsx";

function App() {
    const location = useLocation();
    const router = useRoutes(routes);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Toaster />
            <AuthProvider>
                <PostsProvider>{router}</PostsProvider>
            </AuthProvider>
        </>
    );
}

export default App;

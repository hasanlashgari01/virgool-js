import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthContext.jsx";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <Toaster />
      <AuthProvider>{router}</AuthProvider>;
    </>
  );
}

export default App;

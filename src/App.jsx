import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes.jsx";
import AuthProvider from "./context/AuthContext.jsx";

function App() {
	const router = useRoutes(routes);

	return <AuthProvider>{router}</AuthProvider>;
}

export default App;

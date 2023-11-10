import { AuthLogin, AuthRegister } from "./auth.routes";
import { Home } from "./index.routes";
import { Settings, Publications, Lists, Likes, IndexMe } from "./me.routes";
import { Drafts, IndexPosts, Published } from "./posts.routes";
import { IndexProfile, ProfileLists, ProfilePosts, ProfilePublications } from "./profile.routes";

const routes = [
	// Auth
	{
		path: "/auth",
		children: [
			{ path: "register", element: <AuthRegister /> },
			{ path: "login", element: <AuthLogin /> },
		],
	},
	// Home
	{ path: "/", element: <Home /> },
	// Me
	{
		path: "/me/*",
		element: <IndexMe />,
		children: [
			{ path: "settings", element: <Settings /> },
			{ path: "publications", element: <Publications /> },
			{ path: "Lists", element: <Lists /> },
			{ path: "Likes", element: <Likes /> },
		],
	},
	// Posts
	{
		path: "/posts/*",
		element: <IndexPosts />,
		children: [
			{ path: "drafts", element: <Drafts /> },
			{ path: "published", element: <Published /> },
		],
	},
	// Profile
	{
		path: "/:username/*",
		element: <IndexProfile />,
		children: [
			{ path: "posts", element: <ProfilePosts /> },
			{ path: "lists", element: <ProfileLists /> },
			{ path: "publications", element: <ProfilePublications /> },
		],
	},
];

export { routes };

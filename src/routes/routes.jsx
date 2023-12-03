import { AuthLogin, AuthRegister } from "./auth.routes";
import { CreatePost, Home } from "./index.routes";
import { Settings, Publications, Lists, Likes, IndexMe } from "./me.routes";
import { Drafts, IndexPosts, PostPage, Published } from "./posts.routes";
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
	{ path: "/post/create", element: <CreatePost /> },
	// Post Single Page
	{ path: "/post/:postId", element: <PostPage /> },
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
		path: "/user/:username",
		element: <IndexProfile />,
		children: [
			{ path: "posts", element: <ProfilePosts /> },
			{ path: "lists", element: <ProfileLists /> },
			{ path: "publications", element: <ProfilePublications /> },
		],
	},
];

export { routes };

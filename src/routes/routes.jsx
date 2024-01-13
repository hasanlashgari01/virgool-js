import TopicPage from "../pages/TopicPage";
import {
    AdminBanUser,
    AdminComment,
    AdminIndex,
    AdminPage,
    AdminPost,
    AdminTopic,
    AdminUsers,
    AdminUsersAdmins,
} from "./admin.routes";
import { AuthLogin, AuthRegister } from "./auth.routes";
import { CreatePost, Home } from "./index.routes";
import { IndexMe, Likes, Lists, Publications, Settings } from "./me.routes";
import { Drafts, IndexPosts, PostPage, Published } from "./posts.routes";
import { AdminPrivate, UserPrivate } from "./private.routes";
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
    { path: "/topic/:href", element: <TopicPage /> },
    { path: "/post/create", element: <CreatePost /> },
    // Post Single Page
    { path: "/post/:postId", element: <PostPage /> },
    // Me
    {
        path: "/me/*",
        element: (
            <UserPrivate>
                <IndexMe />
            </UserPrivate>
        ),
        children: [
            { path: "settings", element: <Settings /> },
            { path: "publications", element: <Publications /> },
            { path: "Lists", element: <Lists /> },
            { path: "Posts", element: <Likes /> },
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
        path: "/:username/",
        element: <IndexProfile />,
        children: [
            { path: "posts", element: <ProfilePosts /> },
            { path: "lists", element: <ProfileLists /> },
            { path: "publications", element: <ProfilePublications /> },
        ],
    },
    {
        path: "/admin/*",
        element: (
            <AdminPrivate>
                <AdminPage />
            </AdminPrivate>
        ),
        children: [
            { path: "index", element: <AdminIndex /> },
            { path: "admins", element: <AdminUsersAdmins /> },
            { path: "users", element: <AdminUsers /> },
            { path: "topics", element: <AdminTopic /> },
            { path: "posts", element: <AdminPost /> },
            { path: "comments", element: <AdminComment /> },
            { path: "ban-user", element: <AdminBanUser /> },
        ],
    },
];

export { routes };


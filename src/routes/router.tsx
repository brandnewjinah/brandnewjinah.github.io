import { createBrowserRouter } from "react-router-dom";

import Layout from "@/components/Layout";

import Home from "@/pages/Home";
import Details from "@/pages/Details";
import Lottie from "@/pages/Lottie";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/projects/:id", element: <Details /> },
            { path: "/lottie/:id", element: <Lottie /> },
        ],
    },
]);

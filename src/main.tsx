import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

import "./index.scss";

if (sessionStorage.redirect) {
    const redirectTo = sessionStorage.redirect;
    delete sessionStorage.redirect;
    window.history.replaceState(null, "", redirectTo);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

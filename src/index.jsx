import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import How from "./pages/How";
import What from "./pages/What";
import Where from "./pages/Where";
import Who from "./pages/Who";
import Why from "./pages/Why";
import reportWebVitals from "./reportWebVitals";
import { AppInner } from "./styles/AppStyles";
import "./styles/root.css";
const Layout = () => (
    <AppInner>
        <Header />
        <Outlet />
        <Footer />
    </AppInner>
);
const MainLayout = () => (
    <App>
        <Outlet />
    </App>
);
const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                element: <Layout />,
                children: [
                    {
                        path: "/what",
                        element: <What />,
                    },
                    {
                        path: "/who",
                        element: <Who />,
                    },
                    {
                        path: "/why",
                        element: <Why />,
                    },
                    {
                        path: "/where",
                        element: <Where />,
                    },
                    {
                        path: "/how",
                        element: <How />,
                    },
                ],
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

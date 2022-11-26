import { Left, Right, AppDiv } from "./styles/AppStyles";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);

const App = () => {
    return (
        <AppDiv>
            <Left>
                <RouterProvider router={router} />
            </Left>
            <Right>
                <Menu></Menu>
            </Right>
        </AppDiv>
    );
};

export default App;

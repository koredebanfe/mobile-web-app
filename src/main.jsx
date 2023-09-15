import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import App from "./App";
import Movie from "./Movie"



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>No active Page</div>
    },

    {
        path: "movie/:movieId",
        element: <Movie />,
        errorElement: <div>No active Page</div>
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import NoRoute from "../NoRoute/NoRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        errorElement:<NoRoute></NoRoute>
        
    }
])
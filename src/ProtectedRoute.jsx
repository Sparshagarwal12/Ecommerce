import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const token = localStorage.getItem("token");
    return token === "true" ? <Outlet/> : <Navigate to={"/"}/>;
}

export default ProtectedRoute;

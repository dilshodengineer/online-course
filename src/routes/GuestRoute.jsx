import { Navigate, Outlet } from "react-router";

const GuestRoute = () => {

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user" || 'null'));

    if (token && user) {

        if (user.role === "admin") {
            return <Navigate to="/dashboard" replace />;
        }

        return <Navigate to="/profile" replace />;
    }

    return <Outlet />;
};

export default GuestRoute;
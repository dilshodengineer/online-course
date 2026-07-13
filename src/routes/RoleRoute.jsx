import { Navigate, Outlet } from "react-router";

const RoleRoute = ({ roles }) => {

    const user = JSON.parse(localStorage.getItem("user" || 'null'));

    if (!user) {
        return <Navigate to="/auth/signin" replace />;
    }

    if (!roles.includes(user.role)) {

        if (user.role === "admin") {
            return <Navigate to="/dashboard" replace />;
        }

        return <Navigate to="/profile" replace />;
    }

    return <Outlet />;
};

export default RoleRoute;
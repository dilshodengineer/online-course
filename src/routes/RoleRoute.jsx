import { Navigate, Outlet } from "react-router";

const RoleRoute = ({ roles }) => {

    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        return <Navigate to="/auth/signin" replace />;
    }

    if (!roles.includes(user.role)){
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

export default RoleRoute;
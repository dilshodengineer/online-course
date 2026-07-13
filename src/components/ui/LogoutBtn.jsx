import { useNavigate } from 'react-router';

const LogoutBtn = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/auth/signin');
    }

    return (
        <button
            className="btn btn-dark btn-sm d-flex gap-2"
            onClick={logout}
        >
            <i className="bi bi-person-circle"></i> Chiqish <i className="bi bi-escape"></i>
        </button>
    )
}

export default LogoutBtn
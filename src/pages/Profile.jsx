import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Profile.css";

export default function Profile(){
    const navigate = useNavigate();

    useEffect(()=>{
        const isAuth = localStorage.getItem('isAuth');
        if (!isAuth){
            navigate('/login');
        }
    }, [navigate])

    const logout = () => {
        localStorage.removeItem('isAuth');
        navigate('/login')
    }

    return (
        <div className="profile-container">
            <h1>My Profile</h1>
            <p>You are logged in</p>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}

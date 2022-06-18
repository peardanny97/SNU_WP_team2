import { useState } from "react";
import handleLogin from "../User/handleLogin";
import handleLogout from "../User/handleLogout";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function UserInform() {
    const [user, setUser] = useState(null);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    });

    return (
        <div className="UserInform">
            <h1>{user ? user.displayName : "로그인하세요"}</h1>
            <button className="Login" onClick={handleLogin}>
                로그인
            </button>
            <button className="Logout" onClick={handleLogout}>
                로그아웃
            </button>
        </div>
    );
}

export default UserInform;

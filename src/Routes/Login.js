import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/Login.css";

const Login = () => {
    const [uid, setUId] = useState();
    const [pw, setPW] = useState();

    return (
        <div className="LoginContainer">
            <div className="LoginBox">
                <span>로그인</span>
                <div className="Login_Input">
                    <input
                        value={uid}
                        onChange={e => setUId(e.target.value)}
                    />
                    <input
                        value={pw}
                        onChange={e => setPW(e.target.value)}
                    />
                </div>
                <div className="LoginBtn">
                    로그인
                </div>
                <Link to="/signup">
                    <div className="Signup_Text">
                        회원가입
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Login;
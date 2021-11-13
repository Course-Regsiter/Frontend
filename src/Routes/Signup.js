import React, { useState } from 'react';
import "../css/Login.css";

const Signup = () => {
    const [uid, setUId] = useState();
    const [pw, setPW] = useState();

    return (
        <div className="LoginContainer">
            <div className="LoginBox">
                <span>회원가입</span>
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
                    회원가입
                </div>
            </div>
        </div>
    )
}

export default Signup;
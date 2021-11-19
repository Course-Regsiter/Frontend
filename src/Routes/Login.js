import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import "../css/Login.css";
import api from 'api/api';

const Login = ({ user }) => {
    const history = useHistory();
    const [uid, setUId] = useState();
    const [pw, setPW] = useState();

    const handleClickLogin = async() => {
        if(!uid || !pw) {
            alert("아이디와 비밀번호를 모두 입력해주세요.");
            return;
        }
        
        try {
            const result = await api.login({
                id : uid,
                password : pw
            })
            user.isLogged = null;
            history.push('/');
        }catch(err) {
            alert("아이디 혹은 비밀번호가 맞지 않습니다.");
        }
    }

    const handleChangeId = (e) => {
        e.target.value = e.target.value.replaceAll(' ', '');
        setUId(e.target.value.replaceAll(' ', ''));
    }

    return (
        <div className="LoginContainer">
            <div className="LoginBox">
                <span>로그인</span>
                <div className="Login_Input">
                    <input
                        value={uid}
                        onChange={e => handleChangeId(e)}
                        onKeyUp={e => handleChangeId(e)}
                    />
                    <input
                        type="password"
                        value={pw}
                        onChange={e => setPW(e.target.value)}
                    />
                </div>
                <div onClick={handleClickLogin} className="LoginBtn">
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
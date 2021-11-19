import React, { useState } from 'react';
import "../css/Login.css";
import api from 'api/api';
import { useHistory } from 'react-router';

const Signup = ({ user }) => {
    const history = useHistory();
    const [uid, setUId] = useState();
    const [pw, setPW] = useState();

    const handleClickSignup = async() => {
        if(!uid || !pw) {
            alert("아이디와 비밀번호를 모두 입력해주세요.");
            return;
        }
        
        try {
            const result = await api.createAccount({
                id : uid,
                password : pw
            })
            user.isLogged = null;
            history.push('/');
        }catch(err) {
            if(err.response.status === 409) {
                alert("아이디가 중복됩니다.");
            }
        }
    }

    const handleChangeId = (e) => {
        e.target.value = e.target.value.replaceAll(' ', '');
        setUId(e.target.value.replaceAll(' ', ''));
    }


    return (
        <div className="LoginContainer">
            <div className="LoginBox">
                <span>회원가입</span>
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
                <div onClick={handleClickSignup} className="LoginBtn">
                    회원가입
                </div>
            </div>
        </div>
    )
}

export default Signup;
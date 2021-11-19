import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./css/Navigation.css";
import api from 'api/api';

const Navigation = ({user}) => {
    const history = useHistory();

    const handelClickLogout = async() => {
        try {
            await api.logout();
            user.isLogged = null;
            history.push('/login');
        }catch(err) {
            console.log(err)
            alert("잠시 후 다시 시도해 주세요.");
        }
    }

    return (
        <div className="NavigationContainer">
            <Link to="/">
                <div className="Navigation_Title">
                    수강신청
                </div>
            </Link>
            { user.isLogged ? (
                <div onClick={handelClickLogout} className="Navigation_Login">
                    로그아웃
                </div>
            ) : (
                <Link to="/login">
                    <div className="Navigation_Login">
                        로그인/회원가입
                    </div>
                </Link>
            )}
            
        </div>
    )
}

export default Navigation;
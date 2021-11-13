import React from "react";
import { Link } from "react-router-dom";
import "./css/Navigation.css";

const Navigation = ({user}) => {

    return (
        <div className="NavigationContainer">
            <Link to="/">
                <div className="Navigation_Title">
                    수강신청
                </div>
            </Link>
            { user.isLogged ? (
                <div className="Navigation_Login">
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
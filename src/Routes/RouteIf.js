import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import api from 'api/api';

export default function (Component, option, user, setUser) {
    // option
    // null : 아무나 출입 가능, true : 로그인한 유저만 출입 가능, false : 로그인한 유저는 출입 불가능
    function RouteIf(props) {
        const [auth, setAuth] = useState(false);
        const cookies = new Cookies();

        useEffect(async() => {
            if(user.isLogged !== null) {
                if(option === null ) {
                    // 누구나 출입 가능
                    setAuth(true);
                }else {
                    checkAuth(user);    
                }
            } else {
                // getUser
                await api.getCurrentUser(cookies.get('access_token'))
                .then(res => {
                    setUser({
                        user : res,
                        isLogged : true
                    });
                })
                .catch(err => {
                    setUser({
                        user : null,
                        isLogged : false
                    });
                })
            }
        }, [user])

        const checkAuth = (user) => {
            if (!user.isLogged) {
                if (option) {
                    props.history.push("/login");
                }
            } else {
                //로그인 한 경우
                if (!option) {
                    props.history.push('/');
                }
            }
            setAuth(true);
        }

        return auth && <Component user={user} />
    }

    return RouteIf;
}
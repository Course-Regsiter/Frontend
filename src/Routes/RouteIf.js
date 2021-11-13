import React, { useEffect, useState } from "react";

export default function (Component, option, user, setUser) {
    // option
    // null : 아무나 출입 가능, true : 로그인한 유저만 출입 가능, false : 로그인한 유저는 출입 불가능
    function RouteIf(props) {
        const [auth, setAuth] = useState(false);

        useEffect(() => {
            if(user.isLogged !== null) {
                if(option === null ) {
                    // 누구나 출입 가능
                    setAuth(true);
                }else {
                    checkAuth(user);    
                }
            } else {
                // getUser
                
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
import React, { useEffect, useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import "css/Main.css";
import ClassList from "features/Sugang/ClassList";
import api from 'api/api';
import cookie from 'react-cookies';
import RefreshIcon from '@mui/icons-material/Refresh';
import CircularProgress from '@mui/material/CircularProgress';

const Main = ({user}) => {
    const history = useHistory();
    const [cid, setCid] = useState();
    const [open, setOpen] = useState(false);
    const [myList, setMyList] = useState();
    const [myPreList, setMyPreList] = useState();
    const [error, setError] = useState(false);
    const [preError, setPreError] = useState(false);

    useEffect(() => {
        getMyList();
        getMyPreList();
    }, [])

    const getMyList = async() => {
        setError(false);
        setMyList();

        await api.getUserCourse(cookie.load('access_token'))
        .then(res => {
            setMyList(res.data);
        })
        .catch(err => {
            setError(true);
        })
    }

    const getMyPreList = async() => {
        setPreError(false);
        setMyPreList();

        await api.getUserPreCourse(cookie.load('access_token'))
        .then(res => {
            setMyPreList(res.data);
        })
        .catch(err => {
            setPreError(true);
        })
    }

    const handleClickRegister = async(id) => {
        await api.postUserCourse(cookie.load('access_token'), { course_id : id })
        .then(res => {
            setCid();
            getMyList();
        })
        .catch(err => {
            alert(err.response.data);
        })
    }

    const handleClickDelete = async(id) => {
        await api.deleteUserCourse(cookie.load('access_token'), id)
        .then(res => {
            getMyList();
        })
        .catch(err => {
            alert(err.response.data);
        })
    }

    const handleClickPreRegister = async(id) => {
        try {
            await handleClickRegister(id);
            await api.deleteUserPreCourse(cookie.load('access_token'), id);
            getMyPreList();
        }catch(err) {
            alert(err.response.data);
        }
    }

    const spanStyle = {
        margin : '0 20px',
        color : "rgb(0, 127, 255)",
        fontSize : 14
    }

    return (
        <>
        { open && (
            <ClassList setOpen={setOpen} />
        )}
        <div className="MainContainer">
            <div className="Sugang_Register">
                <div className="Sugang_Header">
                    과목신청
                </div>
                <div className="Sugang_Input">
                    <input 
                        type="text"
                        placeholder="과목번호"
                        value={cid}
                        onChange={e => setCid(e.target.value)}
                    />
                    <div 
                        onClick={e => handleClickRegister(cid)}
                        className="bnt Sugang_Bnt">
                        신청
                    </div>
                    <div 
                        onClick={e => setOpen(true)} 
                        className="bnt PrintClass_Bnt">
                        과목 보기
                    </div>
                </div>
                <div className="Sugang_Body">
                    <div className="Sugang_List">
                        {error && (
                            <div className="Error">
                                <span>정보를 불러오지 못했어요</span>
                                <span onClick={getMyList}>
                                    <RefreshIcon />
                                </span>
                            </div>
                        )}
                        {!(error || myList) && (
                            <div className="Loading">
                                <CircularProgress />
                            </div>
                        )}
                        {myList?.length === 0 && (
                            <div className="Error">
                                <span>신청한 과목이 없어요</span>
                            </div>
                        )}
                        {myList?.map(arr => {
                            return (
                                <div className="Sugang_Item">
                                    <div className="Sugang_Item_Info">
                                        <span style={{width : 50}}>{arr.courseNum}</span>
                                        <span style={{width : 200}}>{arr.courseName}</span>
                                        <span style={{width : 100}}>{arr.prof}</span>
                                        <span style={{width : 120}}>{arr.room}</span>
                                    </div>
                                    <div
                                        className="bnt deleteBnt"
                                        onClick={e => handleClickDelete(arr.courseNum)}
                                    >
                                        삭제
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="Sugang_Basket">
                <div className="Sugang_Header">
                    수강바구니
                    <Link to='/r/preCourse'>
                        <span style={spanStyle}>신청하기 →</span>
                    </Link>
                </div>
                <div className="Sugang_Body">
                    <div className="Sugang_List">
                        {preError && (
                            <div className="Error">
                                <span>정보를 불러오지 못했어요</span>
                                <span onClick={getMyPreList}>
                                    <RefreshIcon />
                                </span>
                            </div>
                        )}
                        {!(preError || myPreList) && (
                            <div className="Loading">
                                <CircularProgress />
                            </div>
                        )}
                        {myPreList?.length === 0 && (
                            <div className="Error">
                                <span>신청한 과목이 없어요</span>
                            </div>
                        )}
                        {myPreList?.map(arr => {
                            return (
                                <div className="Sugang_Item">
                                    <div className="Sugang_Item_Info">
                                        <span style={{width : 50}}>{arr.courseNum}</span>
                                        <span style={{width : 200}}>{arr.courseName}</span>
                                        <span style={{width : 100}}>{arr.prof}</span>
                                        <span style={{width : 120}}>{arr.room}</span>
                                    </div>
                                    <div 
                                        className="bnt registerBnt"
                                        onClick={e => handleClickPreRegister(arr.courseNum)}    
                                    >
                                        신청
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Main;
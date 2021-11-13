import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import "css/Main.css";
import ClassList from "features/Sugang/ClassList";

const Main = ({user}) => {
    const history = useHistory();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log(user)
    }, [])

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
                    />
                    <div className="bnt Sugang_Bnt">
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
                        {Array.from(Array(3)).map(arr => {
                            return (
                                <div className="Sugang_Item">
                                    <div className="Sugang_Item_Info">
                                        <span>1234</span>
                                        <span>과목이름</span>
                                        <span>교수명</span>
                                        <span>강의실</span>
                                    </div>
                                    <div className="bnt deleteBnt">
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
                </div>
                <div className="Sugang_Body">
                    <div className="Sugang_List">
                        {Array.from(Array(3)).map(arr => {
                            return (
                                <div className="Sugang_Item">
                                    <div className="Sugang_Item_Info">
                                        <span>1234</span>
                                        <span>과목이름</span>
                                        <span>교수명</span>
                                        <span>강의실</span>
                                    </div>
                                    <div className="bnt registerBnt">
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
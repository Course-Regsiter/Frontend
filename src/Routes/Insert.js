import axios from "axios";
import React, { useState } from "react";

const Insert = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [prof, setProf] = useState();
    const [room, setRoom] = useState();

    const handleClickSubmit = async(e) => {
        e.preventDefault();

        const data = {
            courseNum : num,
            courseName : name,
            prof,
            room
        }

        await axios.post(`${process.env.REACT_APP_COURSE_SERVER_DOMAIN}/api/course`, data)
        .then(res => {
            alert("등록 완료");
            setNum();
            setName();
            setProf();
            setRoom();
        })
        .catch(err => {
            alert("오류");
        })
    }

    return (
        <div>
            <input placeholder="과목번호" value={num} onChange={e => setNum(e.target.value)} />
            <input placeholder="과목명" value={name} onChange={e => setName(e.target.value)} />
            <input placeholder="교수명" value={prof} onChange={e => setProf(e.target.value)} />
            <input placeholder="강의실" value={room} onChange={e => setRoom(e.target.value)} />
            <button onClick={handleClickSubmit}>등록</button>
        </div>
    )
}

export default Insert;
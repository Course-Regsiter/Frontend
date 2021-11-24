import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import RefreshIcon from '@mui/icons-material/Refresh';
import CircularProgress from '@mui/material/CircularProgress';
import "css/ClassList.css";
import api from "api/api";

const ClassList = ({ setOpen }) => {
    const [list, setList] = useState();
    const [error, setError] = useState(false);

    const getLists = async() => {
        setError(false);
        setList();

        await api.getAllCourse()
        .then(res => {
            setList(res.data);
        })
        .catch(err => {
            setError(true);
        })
    }

    useEffect(() => {
        getLists();
    }, [])


    return (
        <div className="ClassListContainer">
            <div className="ClassListBox">
                <div className="ClassList_Header">
                    <p>전체 과목</p>
                    <CloseIcon onClick={e => setOpen(false)} />
                </div>
                <div className="ClassList">
                    {error && (
                        <div className="Error">
                            <span>정보를 불러오지 못했어요</span>
                            <span onClick={getLists}>
                                <RefreshIcon />
                            </span>
                        </div>
                    )}
                    {!list && (
                        <div className="Loading">
                            <CircularProgress />
                        </div>
                    )}
                    {list &&
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">과목번호</TableCell>
                                        <TableCell align="center">과목명</TableCell>
                                        <TableCell align="center">담당교수</TableCell>
                                        <TableCell align="center">강의실</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {list?.map(arr => {
                                        return (
                                            <TableRow
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="center" component="th" scope="row">
                                                    {arr.courseNum}
                                                </TableCell>
                                                <TableCell align="center">{arr.courseName}</TableCell>
                                                <TableCell align="center">{arr.prof}</TableCell>
                                                <TableCell align="center">{arr.room}</TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    }
                </div>

            </div>
        </div>
    )
}

export default ClassList;
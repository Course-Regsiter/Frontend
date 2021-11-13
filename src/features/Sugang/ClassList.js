import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import "css/ClassList.css";

const ClassList = ({setOpen}) => {
    return (
        <div className="ClassListContainer">
            <div className="ClassListBox">
                <div className="ClassList_Header">
                    <p>전체 과목</p>
                    <CloseIcon onClick={e => setOpen(false)} />
                </div>
                <div className="ClassList">
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
                                { Array.from(Array(20)).map(arr => {
                                    return (
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="center" component="th" scope="row">
                                                1234
                                            </TableCell>
                                            <TableCell align="center">컴퓨터구조</TableCell>
                                            <TableCell align="center">김교수</TableCell>
                                            <TableCell align="center">새천년관 204호</TableCell>
                                        </TableRow>
                                    )
                                })}
                                
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}

export default ClassList;
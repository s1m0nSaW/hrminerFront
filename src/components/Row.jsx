import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ISTJ, ISFJ, INFJ, INTJ, ISTP, ISFP, INFP, INTP, ESTP, ESFP, ENFP, ENTP, ESTJ, ESFJ, ENFJ, ENTJ } from '../Types.js'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function Row({applicant, handleDeleteRow}) {
    const [open, setOpen] = React.useState(false);

    const getDescription = (type) => {
        let str 
        switch (type) {
            case 'ISTJ':
                str = ISTJ;
                break;
            case 'ISFJ':
                str = ISFJ;
                break;
            case 'INFJ':
                str = INFJ;
                break;
            case 'INTJ':
                str = INTJ;
                break;
            case 'ISTP':
                str = ISTP;
                break;
            case 'ISFP':
                str = ISFP;
                break;
            case 'INFP':
                str = INFP;
                break;
            case 'INTP':
                str = INTP;
                break;
            case 'ESTP':
                str = ESTP;
                break;
            case 'ESFP':
                str = ESFP;
                break;
            case 'ENFP':
                str = ENFP;
                break;
            case 'ENTP':
                str = ENTP;
                break;
            case 'ESTJ':
                str = ESTJ;
                break;
            case 'ESFJ':
                str = ESFJ;
                break;
            case 'ENFJ':
                str = ENFJ;
                break;
            case 'ENTJ':
                str = ENTJ;
                break;
            default:
                str = 'Произошла непредвиденная ошибка'

        }
        return (
            str
        )
    }

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {applicant.name}
                </TableCell>
                <TableCell align="right">{applicant.email}</TableCell>
                <TableCell align="right">{applicant.phone}</TableCell>
                <TableCell align="right">{applicant.position}</TableCell>
                <TableCell align="right"><Button color="primary" size='small' variant="outlined" endIcon={<FileDownloadIcon/>}><b>99 ₽</b></Button></TableCell>
                <TableCell align="right"><IconButton onClick={()=>handleDeleteRow(applicant._id)} color="error"><DeleteOutlineIcon/></IconButton></TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Описание
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableBody>
                                    <TableRow>
                                    <TableCell>
                                    {getDescription(applicant.mbtiType)}
                                    </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}



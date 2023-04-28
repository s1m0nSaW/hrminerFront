import {
    Typography, Grid, Paper, Box, Stack, CircularProgress, Button,
    Slide, Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, TextField, Chip, Table, TableContainer, TableCell, TableHead, TableRow, TableBody, IconButton
} from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData, selectIsAuth, logout } from '../redux/slices/auth.js';
import axios from '../axios.js';
import { useForm } from 'react-hook-form';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Navigate } from 'react-router-dom';
import Row from '../components/Row.jsx';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='left' ref={ref} {...props} />;
});

export const Account = () => {
    const dispatch = useDispatch();
    const [applicants, setApplicants] = React.useState();
    const [open, setOpen] = React.useState(false);
    const user = useSelector((state) => state.auth.data);
    const isAuth = useSelector(selectIsAuth)

    const { register, handleSubmit, formState: { isValid } } = useForm({
        defaultValues: {
            positions: '',
        },
        mode: 'onChange',
    });

    const onSubmit = async (values) => {
        const fields = { positions: [...user.positions, values.positions] }

        await axios.patch('/auth/update', fields).then((data) => {
            dispatch(setData(data.data))
        });
    };

    const handleDelete = async (label) => {
        var newPositions = user.positions.filter((position) => {
            return position !== label;
        })
        const fields = { positions: newPositions }
        await axios.patch('/auth/update', fields).then((data) => {
            dispatch(setData(data.data))
        });
    };

    const deleteAccount = async () => {
        if (window.confirm('Вы действительно хотите удалить аккаунт?')) {
            await axios.delete(`/auth/${user._id}`).then(() => {
                dispatch(logout());
                window.localStorage.removeItem('token');
            }).catch((err) => {
                console.log(err)
                return alert("Непредвиденная ошибка")
            });
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteApplicant = async (_id) => {
        if (window.confirm('Вы действительно хотите удалить?')) {
            await axios.delete(`/applicants/${_id}`).then((data) => {
                const updatedRows = applicants.filter(row => row._id !== _id);
                setApplicants(updatedRows);
            }).catch((err) => {
                console.log(err)
                return alert(err.response.data.message)
            });
        }
    }

    const updateApplicant = async ( paymentId, status, id, confirmation_url ) => {
        const fields = {
            paymentId, status
        }
        await axios.patch(`/applicants/${id}`, fields).catch((err) => console.log(err))
        window.location.href = confirmation_url
    }

    const createPayment = async (id) => {
        if (window.confirm('Скачать документ PDF за 99 рублей?')) {
            const fields = {
                id,
                employerId: user._id,
            }
            await axios.post(`/create-payment`,fields).then((data) => {
                if(data.data.confirmation.confirmation_url){
                    updateApplicant( data.data.id, data.data.status, id, data.data.confirmation.confirmation_url )
                    //window.location.href = data.data.confirmation.confirmation_url
                } else { 
                    return alert("Непредвиденная проблема с оплатой") 
                }
            }).catch((err) => {
                console.log(err)
            });
        }
    }

    React.useEffect(() => {
        const results = async () => {
            await axios.get('/applicants').then((data) => {
                setApplicants(data.data);
            })
        };
        results();
    }, [user]);

    if (!isAuth) {
        return <Navigate to={`/`} />
    }

    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={4} sx={{ position: 'relative', height: '100%' }}>
                        <IconButton 
                        sx={{ position: 'absolute', right: '10px', top: '10px' }} 
                        size="small" 
                        color="error"
                        onClick={()=>deleteAccount()}
                        ><DeleteOutlineIcon/></IconButton>
                        {user &&
                            <Box py={3} px={4}>
                                <Typography variant='h6' gutterBottom>Информация:</Typography>
                                <Typography>Компания: <b>{user.name}</b></Typography>
                                <Typography>Email: <b>{user.email}</b></Typography>
                                <Typography>Деятельность: <b>{user.activity}</b></Typography>
                                <Typography>Количество работников: <b>{user.number}</b></Typography>
                                <Typography>Позиций: <b>{user.positions.length}</b></Typography>
                                {applicants ? <Typography>Результатов: <b>{applicants.length}</b></Typography> :
                                    <Typography>Результатов: <b>0</b></Typography>}
                            </Box>}
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper elevation={4} sx={{ position: 'relative', height: '100%' }}>
                        <Button onClick={handleClickOpen} sx={{ position: 'absolute', right: '10px', top: '10px' }}>Добавить +</Button>
                        {user ? <Box py={3} px={4}>
                            <Typography variant='h6' gutterBottom>Позиции:</Typography>
                            {user.positions.length === 0 ? <Typography>У вас ещё нет позиций</Typography> :
                                <>{user.positions.map((label, index) => <Chip sx={{ margin: '5px' }} label={label} key={index} onDelete={() => handleDelete(label)} />)}</>}
                            {user.positions.length > 0 &&
                                <Stack
                                    sx={{ marginTop: '20px' }}
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="flex-end"
                                    spacing={2}
                                >
                                    <CopyToClipboard text={`https://hrminer.ru/test/${user._id}`}>
                                        <Button variant='outlined' size="small" endIcon={<ContentCopyIcon fontSize="small" />}>
                                            Копировать ссылку
                                        </Button>
                                    </CopyToClipboard>
                                </Stack>}
                        </Box> :
                            <Stack direction='row' justifyContent='center' alignItems='center'>
                                <CircularProgress />
                            </Stack>}
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12}>
                    <TableContainer component={Paper}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell>ФИО</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Номер телефона</TableCell>
                                    <TableCell align="right">Позиция</TableCell>
                                    <TableCell align="right">Статус</TableCell>
                                    <TableCell align="right">Скачать</TableCell>
                                    <TableCell align="right">Удалить</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {applicants?.map((applicant, index) => (
                                    <Row key={index} applicant={applicant} handleDeleteRow={deleteApplicant} createPayment={createPayment}/>
                                ))}
                                {applicants?.length === 0 && <><TableRow><TableCell /><TableCell><Typography>У вас ещё нет анкет</Typography></TableCell></TableRow></>}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Добавление позиции</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Напишите название позиции, сотрудника которой хотите протестировать.
                    </DialogContentText>
                </DialogContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent>
                        <TextField
                            label="Название позиции"
                            {...register('positions', { required: "Укажите название" })}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button disabled={!isValid} type="submit" onClick={() => setOpen(false)}>Добавить</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};
import React from 'react';
import axios from '../axios.js';
import { useParams,useNavigate } from 'react-router-dom';
import { Backdrop, Button, CircularProgress, Grid, MenuItem, Paper, Stack, TextField, Typography, ButtonGroup, MobileStepper, FormControlLabel, Checkbox, Link } from '@mui/material';
import { steps } from '../components/Quiz.jsx';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

export const Test = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [employer, setEmployer] = React.useState(null);
    
    const [position, setPosition] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [checkbox, setCheckbox] = React.useState(false)
    
    const [activeStep, setActiveStep] = React.useState(0);
    const [introvert, setIntrovert] = React.useState(0);
    const [logic, setLogic] = React.useState(0);
    const [sensor, setSensor] = React.useState(0);
    const [rational, setRational] = React.useState(0);
    const [person, setPerson] = React.useState('')

    const handleNext = variant => {
        if (variant === "интроверт"){
            setIntrovert(previntrovert => previntrovert + 1)
        } else if (variant === "экстраверт"){
            setIntrovert(previntrovert => previntrovert - 1)
        } else if (variant === "логик"){
            setLogic(prevlogic => prevlogic + 1)
        } else if (variant === "этик"){
            setLogic(prevlogic => prevlogic - 1)
        } else if (variant === "сенсор"){
            setSensor(prevsensor => prevsensor + 1)
        } else if (variant === "интуит"){
            setSensor(prevsensor => prevsensor - 1)
        } else if (variant === "рационал"){
            setRational(prevRational => prevRational + 1)
        } else if (variant === "иррационал"){
            setRational(prevRational => prevRational - 1)
        }

        if (activeStep !== steps.length ) {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        } else if ( activeStep === steps.length ) {
            setActiveStep(prevActiveStep => prevActiveStep);
        }
    };

    

    const sendToEmployer = async () => {
        const fields = {
            name: name,
            email: email,
            phone: phoneNumber,
            mbtiType: person,
            position:position,
            employer:params.id,
        }
        await axios.post('/applicants', fields).then((data) => {
            window.localStorage.setItem(params.id, 'true')
            navigate('/')
            return alert(data.data.success)
        }).catch((error) => {
            // Ошибка
            console.log(error);
            return alert(error.response.data.map((item)=>item.msg))
        });
    }

    const isFormValid = () => {
        return !!name && !!email && !!phoneNumber && !!position && person !== '' && !!checkbox;
    };

    React.useEffect(() => {
        const done = window.localStorage.getItem(params.id)
        if(done){
            navigate('/')
            return alert('Вы уже отправили результаты')
        }
        const getEmployer = async () => {
            await axios.get(`/test/${params.id}`).then((data) => {
                setEmployer(data.data);
            }).catch((error) => {
                // Ошибка
                setEmployer(false);
                console.log(error);
            });
        }
        getEmployer()
    }, [params.id, navigate])

    React.useEffect(()=>{
        const getResults = () => {
            let arr = []
            if(introvert > 0){
                arr.push('I')
            } else if (introvert < 0) {
                arr.push('E')
            }
            if(sensor > 0){
                arr.push('S')
            } else if(sensor < 0){
                arr.push('N')
            }
            if(logic > 0){
                arr.push('T')
            } else if(logic < 0){
                arr.push('F')
            }
            if(rational > 0){
                arr.push('J')
            } else if(rational < 0){
                arr.push('P')
            }
            let str = arr.join('')
            setPerson(str)
        };
        if(activeStep === steps.length){
            getResults()
        }
    },[ activeStep, introvert, sensor, logic, rational ])

    return (
        <>
            {employer === null ?
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={employer === null}
                >
                    <CircularProgress color="inherit" />
                </Backdrop> :
                <>{employer === false ?
                    <Paper>
                        <Stack
                            sx={{ height: '50vh' }}
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                        >
                            <Typography color='error' variant='h6'>
                                Неверная ссылка
                            </Typography>
                        </Stack>
                    </Paper> :
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid item xs={12} md={4}>
                            <Paper sx={{ padding: '20px' }}>

                                <Typography variant="h5" gutterBottom>
                                    Заполните информацию
                                </Typography>

                                <form>
                                    <Stack
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={1}
                                    >
                                        <TextField
                                            required
                                            fullWidth
                                            label="ФИО"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <TextField
                                            required
                                            fullWidth
                                            type='email'
                                            label="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <TextField
                                            required
                                            fullWidth
                                            type="number"
                                            label="Номер телефона"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                        <TextField
                                            fullWidth
                                            select
                                            required
                                            label="Позиция"
                                            value={position}
                                            defaultValue=""
                                            onChange={(e) => setPosition(e.target.value)}
                                        >
                                            {employer.positions.map((option, index) => (
                                                <MenuItem
                                                    key={index}
                                                    value={option}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <FormControlLabel
                                            control={
                                            <Checkbox checked={checkbox} onChange={()=>setCheckbox(!checkbox)} name="checkbox" />
                                            }
                                            label={<Typography gutterBottom variant='caption'>Принимаю <Link variant="caption" href="/info/privacy">политику конфиденциальности</Link></Typography>}
                                        />
                                    </Stack>
                                </form>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Paper sx={{ height: '100%', padding: '20px' }} >
                                <Typography variant="h5">Оветьте на вопросы</Typography>
                                <Stack
                                    sx={{ height: '100%', minHeight: '100%', marginBottom: '20px' }}
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={1}>

                                    {activeStep !== steps.length && <Typography variant="h6">Согласны ли вы с утверждением?</Typography>}
                                    <MobileStepper
                                        variant="text"
                                        steps={steps.length+1}
                                        position="static"
                                        activeStep={activeStep}
                                    />
                                    {activeStep === steps.length && (
                                        <Typography gutterBottom variant='h6'>Опрос окончен</Typography>
                                    )}
                                    {activeStep !== steps.length && (
                                        <Stack
                                            direction="column"
                                            spacing={1}
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <Typography variant="subtitle1" gutterBottom>{steps[activeStep].label}</Typography>
                                            <ButtonGroup sx={{margin:'10px'}}>
                                                <Button variant="outlined" startIcon={<ThumbUpAltIcon />} onClick={() => handleNext(steps[activeStep].variant1)}>
                                                    Верно
                                                </Button>
                                                <Button variant="outlined" endIcon={<ThumbDownAltIcon />} onClick={() => handleNext(steps[activeStep].variant2)}>
                                                    Неверно
                                                </Button>
                                            </ButtonGroup>
                                        </Stack>
                                    )}
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}
                            >
                                <Button
                                    disabled={!isFormValid()}
                                    onClick={() => sendToEmployer()}
                                    variant="contained"
                                >
                                    Отправить результат
                                </Button>
                            </Stack>
                        </Grid>

                    </Grid>}</>}
        </>
    );
};
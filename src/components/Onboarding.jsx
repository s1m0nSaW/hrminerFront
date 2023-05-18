import { Box, Button, MobileStepper, Paper, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import React from 'react'

import registration from '../img/registration.png'
import lk from '../img/lk.png'
import adding from '../img/adding.png'
import copyLink from '../img/copyingLink.png'
import testing from '../img/testing.png'
import result from '../img/lkResult.png'

const images = [
    {
        label: 'Зарегистрируйтесь',
        imgPath: registration,
    },
    {
        label: 'В личном кабинете добавьте позицию',
        imgPath: lk,
    },
    {
        label: 'Напишите название позиции',
        imgPath: adding,
    },
    {
        label: 'Скопируйте ссылку и отправьте тестируемому',
        imgPath: copyLink,
    },
    {
        label: 'Тестируемый проходит тест, указывает данные',
        imgPath: testing,
    },
    {
        label: 'Результаты появятся в личном кабинете',
        imgPath: result,
    },
];

function Onboarding() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Paper elevation={0} sx={{ width: '80%', borderRadius: 2, backgroundColor: "#ffffff" }}>
            <Typography gutterBottom align="center" variant='h6' sx={{ color: "#01c38d", marginBottom: "15px" }}>{images[activeStep].label}</Typography>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: '75%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </SwipeableViews>
            <MobileStepper
                sx={{ backgroundColor: "inherit", borderRadius: 2 }}
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                       
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                       
                    </Button>
                }
            />
        </Paper>
    )
}

export default Onboarding
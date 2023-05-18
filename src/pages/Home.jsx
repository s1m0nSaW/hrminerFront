import React from 'react';
import { useNavigate } from "react-router-dom";

import { Box, Button, Grid, Paper, Toolbar, Typography, Stack } from '@mui/material';

import FlashOffIcon from '@mui/icons-material/FlashOff';
import GroupsIcon from '@mui/icons-material/Groups';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Onboarding from '../components/Onboarding'

export const Home = ( isAuth ) => {
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()

  const handleStart = ()=>{
    navigate('/register')
  }
  return (
    <>
      <Grid container spacing={5}>
        <Stack
          sx={{ width: "100%", height: "66vh", padding: "20px" }}
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            color="white"
            sx={{ textShadow: "0px 0px 100px #01c38d" }}
          >
            Медодики международных компаний стали доступнее благодаря
            искусственному интеллекту.
          </Typography>
          <Typography
            align="center"
            sx={{ color: "#01c38d" }}
            variant="body2"
            gutterBottom
          >
            Компании, такие как Coca-Cola, Procter & Gamble, Johnson & Johnson,
            Nike, IBM, Google, Facebook, Boeing и т.д.
          </Typography>
        </Stack>
        <Grid item xs={12} md={8}>
          <Box py={3} px={4} sx={{ position: "relative" }}>
            <Typography
              variant="h5"
              sx={{ color: "#01c38d", marginBottom: "15px" }}
              component="p"
              gutterBottom
            >
              HR Майнер - сервис управления персоналом с использованием
              психологии.
            </Typography>
            <Typography variant="body3">
              Почему одни продажники успешнее других? Это зависит не только от
              опыта. Есть тип людей, которым получается продавать легко и
              непринужденно. И так с каждой специальностью. Люди разные и
              обладают разными качествами, подходящими на ту или иную должность.
              <br />
              <br />
              Так же важно то, как с ним работает руководство. Особенно важно,
              когда сотрудник напрямую общается с клиентом, ведь он является
              лицом организации.
              <br />
              <br />
              Бизнес как механизм, а люди в нем как шестерёнки, мы поможем найти
              подходящую шестерёнку и подскажем как её смазывать.
              <br />
              <br />
              Речь идет о типологии, которой пользуются крупные компании. В ней
              различают 16 типов людей, у каждого из которых есть свои плюсы и
              минусы.
              <br />
              <br />
            </Typography>
            <Button
              size="small"
              sx={{ color: "#01c38d" }}
              onClick={() => setOpen(!open)}
              endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            >
              {open ? "Скрыть" : "Подробнее"}
            </Button>
            {open && (
              <Typography variant="body3">
                Типоведение насчитывает более ста лет. развития; начало ему было
                положено, когда швейцарский психиатр Карл Густав Юнг
                предположил, что человеческое поведение не определяется
                случайными факторами, а вполне предсказуемо и значит, его можно
                классифицировать. Книга Юнга «Психологические типы», вышедшая в
                1923 году, блестяще отражает его классификацию типов. Однако
                непосвящённому читателю эта книга едва ли будет близка, если
                только он не является серьёзным любителем психологии.
                <br />
                <br />В 1930-х годах Кэтрин Бриггс вместе со своей дочерью,
                исключительно одарённой Изабель Бриггс-Майерс исследовала и
                развивала способы измерения индивидуальных различий взяв за
                основу теорию Карла Юнга. Так на свет появился Индикатор типов
                Майерс-Бриггс и теория Юнга обрела всевозрастающую популярность.
                Сегодня Индикатор типов Майерс-Бриггс относится к числу самых
                распространённых средств практической психологии.
                <br />
                <br />
                Типология состоит из четырех измерений личности, каждое
                измерение имеет по две противоположные категории.
                <br />
                <br />
                Вот список категорий в соответствии с параметрами:
                <br />- Экстраверсия (Extroversion) и Интроверсия (Introversion)
                <br />- Ощущение (Sensing) и Интуиция (Intuition)
                <br />- Размышление (Thinking) и Чувство (Feeling)
                <br />- Суждение (Judging) и Восприятие (Perceiving)
                <br />
                <br />
                Комбинации этих четырех параметров дают 16 типов личности.
                <br /> В странах СНГ популярна "Соционика", так же основанная на
                работах Юнга.
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
      <Toolbar />
      <Grid item xs={12} md={10}>
        <Paper elevation={0} sx={{ backgroundColor: "inherit" }}>
          <Box py={3} px={4}>
            <Typography
              variant="h61"
              component="h3"
              gutterBottom
              sx={{ color: "#696e79" }}
            >
              „… проблемы разрешаются, когда человек начинает понимать, что
              межличностные конфликты нередко возникают из-за различных способов
              восприятия мира, а не в следствии эгоцентризма или злому умыслу.“
            </Typography>
            <Typography
              variant="h6"
              component="p"
              align="right"
              sx={{ color: "#696e79" }}
            >
              — Карл Густав Юнг
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Toolbar />
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={4}
            sx={{ height: "100%", backgroundColor: "#191e29" }}
          >
            <Box py={3} px={4}>
              <GroupsIcon sx={{ fontSize: 36, color: "#01c38d" }} />
              <Typography
                variant="h6"
                component="p"
                sx={{ color: "#01c38d" }}
                gutterBottom
              >
                Команда
              </Typography>
              <Typography variant="body3" gutterBottom>
                Типология позволяет менеджеру понимать, что мотивирует каждого
                сотрудника, как они принимают решения, как они общаются и т.д.
                При использовании этой информации менеджер может улучшить
                коммуникацию между сотрудниками и повысить их продуктивность.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={4}
            sx={{ height: "100%", backgroundColor: "#191e29" }}
          >
            <Box py={3} px={4}>
              <EngineeringIcon sx={{ fontSize: 36, color: "#01c38d" }} />
              <Typography
                variant="h6"
                component="p"
                sx={{ color: "#01c38d" }}
                gutterBottom
              >
                Соответствие
              </Typography>
              <Typography variant="body3" gutterBottom>
                Типология может быть использован для оценки, какой тип работы
                наиболее подходит тому или иному сотруднику. Если менеджер
                найдет сотрудников, удовлетворяющих определенному типу работы,
                они будут более продуктивными и удовлетворенными.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={4}
            sx={{ height: "100%", backgroundColor: "#191e29" }}
          >
            <Box py={3} px={4}>
              <FlashOffIcon sx={{ fontSize: 36, color: "#01c38d" }} />
              <Typography
                variant="h6"
                component="p"
                sx={{ color: "#01c38d" }}
                gutterBottom
              >
                Конфликты
              </Typography>
              <Typography variant="body3" gutterBottom>
                При работе с людьми нередко возникают конфликты. Типология может
                помочь менеджеру понять, почему возникли те или иные конфликтные
                ситуации и помогут решить или избежать конфликтов.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Toolbar />
      <Grid item xs={12} md={6}>
        <Paper elevation={0} sx={{ backgroundColor: "inherit" }}>
          <Box py={3} px={4}>
            <Typography
              variant="h5"
              sx={{ color: "#01c38d", marginBottom: "15px" }}
              align="center"
              color="white"
            >
              Надежная информация
              <br />
              <br />
            </Typography>
            <Typography variant="body3" gutterBottom>
              Наша технология искусственного интеллекта оценивает достоверность
              источников по нескольким критериям, таким как: <br />
              <br />- <u>Авторитетность</u>: кто является автором или издателем
              источника и какова его репутация и квалификация в области? <br />-{" "}
              <u>Актуальность</u>: когда источник был опубликован или обновлен и
              насколько он соответствует текущему состоянию знаний? <br />-{" "}
              <u>Объективность</u>: какова цель источника и есть ли в нем
              предвзятость или манипуляция фактами? <br />- <u>Достоверность</u>
              : какова точность и правдоподобность информации в источнике и есть
              ли ссылки на другие надежные источники? <br />- <u>Покрытие</u>:
              насколько полно и глубоко источник раскрывает тему и учитывает
              разные точки зрения? <br />
              <br />
              Мы выбираем источники, которые удовлетворяют большинству или всем
              этим критериям.
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Toolbar />
      <Stack
        sx={{ width: "100%" }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Onboarding />
      </Stack>
      <Toolbar />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Button
              sx={{
                color: "white",
              }}
              variant="contained"
              color="success"
              size="large"
              onClick={() => handleStart()}
              endIcon={<ArrowForwardIcon />}
            >
              Регистрация
            </Button>
      </Stack>
      <Toolbar />
      <Grid container alignItems="stretch" spacing={5}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              backgroundColor: "#191e29",
              height: "100%",
              position: "relative",
              display: "flex",
            }}
          >
            <Box py={3} px={4}>
              <Typography
                variant="h6"
                component="p"
                gutterBottom
                sx={{ color: "#01c38d" }}
              >
                Описание
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "white" }}>
                После того, как тестируемый отправит результаты, в таблице
                личного кабинета появится описание типа его личности,
                включающее:
                <br />
                <br /> - Общее описание;
                <br /> - Сильные и слабые стороны;
                <br /> - Подходящие профессии.
                <br />
                <br /> Эта информация будет полезна при поиске
                сотрудников, так как позволит выбрать кандидатов исходя из того, чей
                тип личности наиболее подходит вашему предприятию.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              backgroundColor: "#191e29",
              height: "100%",
              position: "relative",
              display: "flex",
            }}
          >
            <Box py={3} px={4}>
              <Typography
                variant="h6"
                component="p"
                gutterBottom
                sx={{ color: "#01c38d" }}
              >
                Рекомендации
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "white" }}>
                Дополнительно, в таблице есть <u>платная</u> возможность
                сформировать отчёт по результатам тестирования, в котором будут
                присутствовать данные о тестируемом, а также описание его типа
                личности и практические рекомендации по работе с таким
                представителем:
                <br />
                <br />
                - Как работать с представителем данного типа личности.
                <br />
                - Как ставить задачи.
                <br />
                - Как мотивировать.
                <br />
                - Как решать проблемы и избегать конфликтов.
                <br />
                - Как развивать лидерские способности и управлять командой.
                <br />
                <br />
                Эйчармайнер поможет менеджеру в максимально эффективном
                использовании потенциала своих сотрудников, делая его
                незаменимым инструментом в самых разнообразных условиях.
              </Typography>
              <Toolbar />
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Toolbar />
    </>
  );
};

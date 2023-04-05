import React from 'react';
import { useNavigate } from "react-router-dom";

import { Box, Button, Grid, Paper, Toolbar, Typography } from '@mui/material';

import FlashOffIcon from '@mui/icons-material/FlashOff';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import GroupsIcon from '@mui/icons-material/Groups';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PublicIcon from '@mui/icons-material/Public';

export const Home = ( isAuth ) => {
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()

  const handleStart = ()=>{
    navigate('/register')
  }
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
          <Paper elevation={4}>
            <Box py={3} px={4} sx={{ position: 'relative' }}>
              <Typography variant="h4" component="p" gutterBottom>
                HR Майнер - сервис управления персоналом с использованием психологии.
              </Typography>
              <Typography variant="body1" >
                Типология <b>Майерс Бриггс</b> является одним из самых популярных тестов личности в мире
                и широко используется работодателями для тестирования соискателей и сотрудников.<br />
                <b>Наш онлайн сервис</b> предоставляет быстрый и удобный способ тестирования, чтобы вы могли сформировать идеальный коллектив.<br /><br />

                Результаты тестирования позволяют определить,
                к какой категории по каждому измерению относится тестируемый.
                Знание профессиональных портретов может помочь вам принимать более обоснованные решения
                при <b>найме новых сотрудников, создании команды
                  или решении конфликтных ситуаций</b> на рабочем месте.<br /><br />
              </Typography>
              <Button
                sx={{ position: 'absolute', right: '10px', bottom: '10px' }}
                size="small"
                onClick={() => setOpen(!open)}
                endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              >
                {open ? 'Скрыть' : 'Подробнее'}
              </Button>
              {open &&
                <Typography>
                  Типоведение насчитывает более ста лет.
                  развития; начало ему было положено, когда швейцарский психиатр <b>Карл Густав Юнг</b> предположил, что
                  человеческое поведение не определяется случайными факторами, а вполне предсказуемо и значит, его
                  можно классифицировать.
                  Книга Юнга <b>«Психологические типы»</b>, вышедшая в 1923 году, блестяще отражает его
                  классификацию типов. Однако непосвящённому читателю эта книга едва ли будет близка, если только он 
                  не является серьёзным любителем психологии.<br /><br />
                  В 1930-х годах <b>Кэтрин Бриггс</b> вместе со своей дочерью, исключительно одарённой <b>Изабель Бриггс-Майерс</b> исследовала 
                  и развивала способы измерения индивидуальных различий взяв за основу теорию Карла Юнга.
                  Так на свет появился <b>Индикатор типов Майерс-Бриггс</b> и теория Юнга обрела всевозрастающую популярность.
                  Сегодня Индикатор типов Майерс-Бриггс относится к числу <b>самых распространённых средств практической психологии</b>.<br /><br />
                  Типология состоит из <b>четырех измерений</b> личности,
                  каждое измерение имеет по две противоположные категории.<br /><br />
                  Вот список категорий в соответствии с параметрами:<br />

                  - <b>Экстраверсия</b> (Extroversion) и <b>Интроверсия</b> (Introversion)<br />
                  - <b>Ощущение</b> (Sensing) и <b>Интуиция</b> (Intuition)<br />
                  - <b>Размышление</b> (Thinking) и <b>Чувство</b> (Feeling)<br />
                  - <b>Суждение</b> (Judging) и <b>Восприятие</b> (Perceiving)<br /><br />
                  Комбинации этих четырех параметров дают 16 типов личности.<br /><br />
                </Typography>}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ backgroundColor: '#3a6ea5' }}>
            <Box py={3} px={4}>
              <PublicIcon sx={{ fontSize: 56, color:'white' }} />
              <Typography color='white' variant="h6" component="p" gutterBottom>
                Какие компании с мировым именем используют типологию?
              </Typography>
              <Typography color='white' variant="body1" gutterBottom>
                Известно, что многие крупные компании использует этот инструмент
                в рамках своих программ обучения и развития сотрудников.
                Кроме того, типология используется в качестве системы управления для подбора и развития лидеров в компании.
                Встречается в компаниях,
                таких как <b>Coca-Cola</b>, <b>Procter & Gamble</b>, <b>Johnson & Johnson</b>, <b>Nike</b>, <b>IBM</b>, <b>Google</b>, <b>Facebook</b>, <b>Boeing</b> и т.д.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Toolbar />
      <Grid item xs={12} md={10}>
        <Paper elevation={0} sx={{ backgroundColor: 'inherit' }} >
          <Box py={3} px={4}>
            <Typography variant="h61" component="h3" gutterBottom sx={{ color: '#004e98' }}>
              „… проблемы разрешаются, когда человек начинает понимать,
              что межличностные конфликты нередко возникают из-за различных способов восприятия мира,
              а не в следствии эгоцентризма или злому умыслу.“
            </Typography>
            <Typography variant="h6" component="p" align="right" sx={{ color: '#004e98' }}>
              —  Карл Густав Юнг
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Toolbar />
      <Grid container spacing={5}>
        <Grid item xs={12} md={3}>
          <Paper elevation={4} sx={{height:'100%'}}>
            <Box py={3} px={4}>
              <GroupsIcon color="disabled" sx={{ fontSize: 56 }} />
              <Typography variant="h6" component="p" gutterBottom>
                Команда
              </Typography>
              <Typography variant="body1" gutterBottom>
                Типология позволяет менеджеру понимать, что мотивирует каждого сотрудника,
                как они принимают решения, как они общаются и т.д.
                При использовании этой информации менеджер
                может улучшить коммуникацию между сотрудниками и повысить их продуктивность.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={4} sx={{height:'100%'}}>
            <Box py={3} px={4}>
              <EngineeringIcon color="disabled" sx={{ fontSize: 56 }} />
              <Typography variant="h6" component="p" gutterBottom>
                Соответствие
              </Typography>
              <Typography variant="body1" gutterBottom>
                Типология может быть использован для оценки, какой тип работы
                наиболее подходит тому или иному сотруднику.
                Если менеджер найдет сотрудников, удовлетворяющих определенному типу работы,
                они будут более продуктивными и удовлетворенными.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={4} sx={{height:'100%'}}>
            <Box py={3} px={4}>
              <FlashOffIcon color="disabled" sx={{ fontSize: 56 }} />
              <Typography variant="h6" component="p" gutterBottom>
                Конфликты
              </Typography>
              <Typography variant="body1" gutterBottom>
                При работе с людьми нередко возникают конфликты.
                Типология может помочь менеджеру понять, почему возникли те или иные конфликтные ситуации
                и помогут решить или избежать конфликтов.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={4} sx={{height:'100%'}}>
            <Box py={3} px={4}>
              <AutoGraphIcon color="disabled" sx={{ fontSize: 56 }} />
              <Typography variant="h6" component="p" gutterBottom>
                Рост
              </Typography>
              <Typography variant="body1" gutterBottom>
                Типология может помочь менеджеру определить зоны,
                где каждый сотрудник может развиваться,
                чтобы стать более уверенным в своих компетенциях
                и применяли их в повседневной работе.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Toolbar />
      <Grid container alignItems="stretch" spacing={5}>
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ backgroundColor: '#3a6ea5', height: '100%', position: 'relative', display:'flex' }}>
            <Box py={3} px={4}>
              <Typography variant="h6" component="p" gutterBottom sx={{ color: 'white' }}>
                Бесплатно
              </Typography>
              <Typography variant="h4" component="p" gutterBottom sx={{ color: 'white' }}>
                Как начать?
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: 'white' }}>
                <b>1.</b> Зарегистрироваться. Указать название компании, адрес электронной почты и пароль.<br /><br />
                <b>2.</b> Создать позицию.<br /><br />
                <b>3.</b> Создать ссылку на тест и отправить соискателю или работнику.<br /><br />
                <b>4.</b> Результаты теста будут видны в личном кабинете в виде таблицы. Там будет общее описание психотипа соискателя, сильные и слабые стороны, подходящие профессии.<br /><br />
              </Typography>
              
            </Box>
            <Button 
                sx={{ position: 'absolute', bottom: '10px', left: '10px', color: 'white' }}
                size="large"
                onClick={()=>handleStart()}
                endIcon={<ArrowForwardIcon />}>Начать</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ backgroundColor: '#ff6700', height: '100%', position: 'relative', display:'flex' }}>
            <Box py={3} px={4}>
              <Typography variant="h6" component="p" gutterBottom sx={{ color: 'white' }}>
                Платные услуги
              </Typography>
              <Typography variant="h4" component="p" gutterBottom sx={{ color: 'white' }}>
                99 ₽
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: 'white' }}>
                Дополнительная информация о сотруднике, в формате PDF, которую можно сохранить или распечатать. В ней помимо вышеуказанной информации будут рекомендации:<br /><br />
                - Как работать с представителем данного типа личности.<br />
                - Как ставить задачи.<br />
                - Чем мотивировать.<br />
                - Решение конфликтных ситуаций.<br /><br />
                <b>Таким образом, типология станет полезным инструментом для менеджеров,
                которые хотят максимизировать потенциал своих сотрудников.</b>
              </Typography>
            <Toolbar/>
            </Box>
            <Button 
                sx={{ position: 'absolute', bottom: '10px', left: '10px', color: 'white' }}
                size="large"
                onClick={()=>handleStart()}
                endIcon={<ArrowForwardIcon />}>Начать</Button>
          </Paper>
        </Grid>
      </Grid>
      <Toolbar />
    </>
  );
};

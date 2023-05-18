import React from 'react';
import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Privacy } from './pages/Info/Privacy';
import { Terms } from './pages/Info/Terms';
import { Offer } from './pages/Info/Offer';

import { Header } from "./components";
import { Home, Registration, Login, Account, Test } from "./pages";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import { Typography, Stack, Link, Snackbar, Button } from '@mui/material';

import styles from './index.scss';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    window.localStorage.setItem('cookies', 'accepted')
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        OK
      </Button>
    </React.Fragment>
  );

  React.useEffect(() => {
    dispatch(fetchAuthMe());
    const cookies = window.localStorage.getItem('cookies')
    if(cookies !== 'accepted' || !cookies){
      setOpen(true)
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/lk/:id" element={<Account />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="/info/privacy" element={<Privacy />} />
          <Route path="/info/terms" element={<Terms />} />
          <Route path="/info/offer" element={<Offer />} />
        </Routes>
      </Container>
      <footer className={styles.footer}>
        <Stack sx={{ backgroundColor: '#191E29', marginTop: '30px', paddingTop: '15px'}}>
        <Stack sx={{ width: '100%' }} direction={{ xs: 'column', sm: 'row' }} alignItems={'center'} justifyContent={'center'} spacing={2}>
          <Link sx={{ color: '#01c38d'}} variant="body2" href="/info/privacy">Политика конфиденциальности</Link>
          <Link sx={{ color: '#01c38d'}} variant="body2" href="/info/offer">Оферта</Link>
          <Link sx={{ color: '#01c38d'}} variant="body2" href="/info/terms">Условия использования сайта</Link>
        </Stack>
          <Typography sx={{marginTop: '15px'}} variant='caption' color='white' align='center' gutterBottom>© 2023 HR Майнер - все права защищены.</Typography>
        </Stack>
      </footer>
      <Snackbar
        anchorOrigin={{vertical: 'bottom',
        horizontal: 'center',}}
        open={open}
        onClose={handleClose}
        message={<Typography>Мы используем cookie. Продолжая использовать сайт, Вы даете свое согласие на использование cookie для хранения данных. <Link href="/info/privacy">Подробнее</Link></Typography>}
        action={action}
      />
    </>
  );
}

export default App;

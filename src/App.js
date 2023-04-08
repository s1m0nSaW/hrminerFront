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
      <footer>
        <Stack sx={{ width: '100%', marginTop: '30px' }} direction={{ xs: 'column', sm: 'row' }} alignItems={'center'} justifyContent={'center'} spacing={2}>
          <Link variant="body2" href="/info/privacy">Политика конфиденциальности</Link>
          <Link variant="body2" href="/info/offer">Оферта</Link>
          <Link variant="body2" href="/info/terms">Условия использования сайта</Link>
        </Stack>
        <Typography align='center' gutterBottom>© 2023 HR Майнер - все права защищены.</Typography>
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

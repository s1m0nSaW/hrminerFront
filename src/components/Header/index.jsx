import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuth, logout } from '../../redux/slices/auth';
import Button from '@mui/material/Button';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

export const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.data);
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <Typography variant="h5" sx={{ color: '#3a6ea5'}}><b>HR Майнер</b></Typography>
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Button onClick={()=>navigate(`/lk/${user._id}`)}>
                  Личный кабинет
                </Button>
                <Button onClick={onClickLogout} color="error">
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button>Войти</Button>
                </Link>
                <Link to="/register">
                  <Button>Регистрация</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

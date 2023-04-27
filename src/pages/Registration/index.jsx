import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuth, fetchRegister } from '../../redux/slices/auth';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import styles from './Login.module.scss';
import { FormControlLabel, Checkbox, Link, Select, OutlinedInput, MenuItem, InputLabel, FormControl } from '@mui/material';

export const Registration = () => {
  const isAuth = useSelector(selectIsAuth)
  const user = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      checkbox: false,
    },
    mode: 'onChange',
  });

  const activities = [
    'Торговля',
    'Рекламная деятельность',
    'Грузоперевозки',
    'Рестораны и кафе',
    'Парикмахерские и салоны красоты',
    'Другое',
  ]

  const numberOfEmployes = [
    'до 5',
    '5 - 10',
    '10 - 20',
    '20 - 50',
    'больше 50',
  ]

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      return alert('Не удалось зарегистрироваться')
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    }
  };

  if (isAuth) {
    return <Navigate to={`/lk/${user._id}`} />
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Регистрация
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="Название компании"
          error={Boolean(errors.fullName?.message)}
          helperText={errors.fullName?.message}
          {...register('fullName', { required: "Укажите название компании" })}
          fullWidth />
        <TextField
          className={styles.field}
          label="E-Mail"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          type='email'
          {...register('email', { required: "Укажите почту" })}
          fullWidth />
        <FormControl fullWidth>
          <InputLabel id="activity-label">Деятельность</InputLabel>
          <Select
            label="Деятельность"
            fullWidth
            sx={{ marginBottom: '20px' }}
            labelId="activity-label"
            input={<OutlinedInput label="Деятельность" />}
            {...register('activity', { required: "Выберите деятельность" })}
          >
            {activities.map((name) => (
              <MenuItem
                key={name}
                value={name}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="number-label">Количество работников</InputLabel>
          <Select
            label="Количество работников"
            fullWidth
            sx={{ marginBottom: '20px' }}
            labelId="number-label"
            input={<OutlinedInput label="Количество работников" />}
            {...register('number', { required: "Выберите из списка" })}
          >
            {numberOfEmployes.map((name) => (
              <MenuItem
                key={name}
                value={name}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          className={styles.field}
          label="Пароль"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          type='password'
          {...register('password', { required: "Укажите пароль" })}
          fullWidth />
        <FormControlLabel
          control={
            <Checkbox {...register('checkbox', { required: "Ознакомьтесь с политикой конфиденциальности" })} name="checkbox" />
          }
          label={<Typography gutterBottom variant='caption'>Принимаю <Link variant="caption" href="/info/privacy">политику конфиденциальности</Link></Typography>}
        />
        <Button disabled={!isValid} type='submit' size="large" variant="contained" fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  );
};

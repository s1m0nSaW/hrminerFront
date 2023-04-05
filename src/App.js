import React from 'react';
import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Header } from "./components";
import { Home, Registration, Login, Account, Test } from "./pages";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  },[dispatch]);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Registration />}/>
          <Route path="/lk/:id" element={<Account />}/>
          <Route path="/test/:id" element={<Test />}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;

import React from 'react';
import { useNavigate } from "react-router";
import TextField from './Components/TextField';
import Button from './Components/button';
import { Link } from "react-router";
import { text_z } from "./data";
import Text from './Components/text';
import "./App.css";
import ArtistProfile from './pages/ArtistProfile';
import ErrorBoundary from './components/ErrorBoundary';

function Title_text(props) {
  return (
    <p className='Title'>{props.title_text}</p>
  )
}

const App = () => {
  let navigate = useNavigate();
  return (
    <div className='AuthDiv'>
      <Text text="MusicApp"></Text>
      <Title_text title_text={text_z[0].title_text}/>
      <TextField type="email" pl="Логин" />
      <TextField type="password" pl="Пароль"/>
      <Button text="Войти" command={() => {navigate("/home")}}/>
      <Button text="Создать ID" command={() => {navigate("/register")}}></Button>
      <Link to='/passwordF'>{text_z[1].title_text}</Link>
    </div>
  );
};

export default App;



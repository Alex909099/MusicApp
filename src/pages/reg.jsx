import { useState } from 'react'
import TextField from '../Components/TextField'
import Button from '../Components/button'
import Text from '../Components/text'
import { useNavigate } from "react-router";
import { text_z } from '../data';
import "../App.css"
function Title_text(props) {
  return (
    <p className='Title'>{props.title_text}</p>
  )
}
export default function Reg() {
    let navigate = useNavigate();
  return (
    <div className='AuthDiv'>
  
    <Text text="MusicApp"/>
    <Title_text title_text={text_z[0].title_text}/>
    <TextField type="email" pl=" Логин" />
    <TextField type="password" pl=" Пароль"/>
    <Button text="Создать ID" command={() => {navigate("/home")}}/>
    <Button text="Есть аккаунт?" command={() => {navigate("/")}}/>
    </div>
  )
}



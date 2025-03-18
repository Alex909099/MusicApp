import { useState } from 'react'
import TextField from './Components/TextField'
import Button from './Components/button'
import { BrowserRouter, Routes, Route } from "react-router";

import Text from './Components/text'
import "./App.css"
export default function Login() {

  return (
    <div className='AuthDiv'>
  
    <Text text="MusicApp"/>
    <TextField type="email" pl=" Логин" />
    <TextField type="password" pl=" Пароль"/>
    <Button text="Войти" />
    <div>
    <Button text="Создать ID" />
    </div>
    <h3>Забыли пароль?</h3>
    </div>
  )
}



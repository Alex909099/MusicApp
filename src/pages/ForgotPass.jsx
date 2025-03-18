import { useState } from 'react'
import Text from '../Components/text';
import Button from '../Components/button';
import { useNavigate } from "react-router";
export default function ForgotPass() {
    let navigate = useNavigate();
  return (
    <div className='AuthDiv'>
        <Text text="Данная функция временно не работает"></Text>
        <div className='space'></div>
        <Button text="Назад" command={() => {navigate("/")}}></Button>
    </div>
  )
}



import { useState } from 'react'
import Text from '../Components/text';
import Button from '../Components/button';
import { useNavigate } from "react-router";
export default function Errorr() {
    let navigate = useNavigate();
  return (
    <div className='AuthDiv'>
        <Text text="Ошибка"></Text>
        <div className='space'></div>
        <Button text="Назад" command={() => {navigate("/register")}}></Button>
    </div>
  )
}



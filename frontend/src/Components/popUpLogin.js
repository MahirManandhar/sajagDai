import { Container } from '@mui/material'
import React from 'react'


export default function popUpLogin(props) {
  return (
    <>
    <div className='pop'>
        {props.somepop === "open"?
        <Container></Container>:""}
      
    </div>
    </>
  )
}





:
import { TextField } from '@mui/material'
import React from 'react'

export default function Node({num, playerName}) {
  //console.log(num)
  let xStr = `${num*100}px`;
  return (
    <TextField id="outlined-basic" label="Outlined" variant="outlined"
      sx={{ 
        left: xStr, 
        top: '50px', 
        position: 'absolute', 
        fieldset: {
          borderColor: 'white'
        }
      }}
    />
  )
}

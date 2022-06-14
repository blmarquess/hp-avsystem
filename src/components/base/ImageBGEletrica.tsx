import { CardMedia } from '@mui/material'
import React from 'react'

export default function ImageBGEletrica () {
  return (
    <CardMedia
      sx={{
        width: '100%',
        height: 200,
        mt: 22,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#3AB54A',
        opacity: '0.8',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
      image="/images/energia.png" />
  )
}

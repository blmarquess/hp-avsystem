import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import React from 'react'
import { ServiceType } from '../../mocks/servicos'

export default function ServicosCard (props:ServiceType) {
  return (
    <Box sx={{ display: 'flex', width: 350, height: 120 }}>
      <Box>
        <Image src={props.imageUrl} alt={props.title} width="105px" height="105px" />
      </Box>
      <Box sx={{ width: 350, px: 1 }}>
        <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>
          {props.title}
        </Typography>
        <Typography sx={{ fontSize: 12, fontWeight: 'regular' }}>
          {props.description}
        </Typography>
      </Box>
    </Box>
  )
}

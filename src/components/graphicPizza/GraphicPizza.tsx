import Box from '@mui/material/Box'
import Image from 'next/image'
import React from 'react'

export default function GraphicPizza () {
  return (
    <Box sx={{ width: '100%', height: '570px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Box sx={{ width: '100%', height: 40, mb: 2, backgroundColor: '#3AB54A' }} />
      <Image src="/images/data_visualization.png" alt="Graphic Pizza" width={(912 * 0.6)} height={514} />
      <Box sx={{ width: '100%', height: 40, mt: 2, backgroundColor: '#3AB54A' }} />
    </Box>
  )
}

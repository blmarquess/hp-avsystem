import React from 'react'
import { Box, Typography } from '@mui/material'

export default function ServicosBlock () {
  return (
    <Box sx={{ display: 'flex', my: 4, justifyContent: 'center' }}>
      <Typography variant="h4" sx={{ color: '#3AB54A' }}>
        NOSSOS
      </Typography>
      <Typography variant="h4" sx={{ color: '#030403', fontWeight: 'extrabold', ml: 1 }}>
        SERVIÇOS
      </Typography>
      <Box sx={{ my: 2 }}>

      </Box>
    </Box>
  )
}

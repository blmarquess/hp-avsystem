import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function CardWithVideo () {
  return (
        <Card sx={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h6">
                +100 EMPRESAS
              </Typography>
              <Typography variant="h6" color="text.secondary" component="div">
                +1500 PROJETOS
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

          </Box>
      </Box>
      <CardMedia
            component="img"
            sx={{
              width: 300,
              height: 200,
              position: 'absolute',
              top: '0',
              left: '30%',
              backgroundColor: '#fff',
              opacity: 0,
              ':hover': { opacity: 0.9, image: '/images/icons/playing.png' }
            }}
            image="/images/icons/playing-icon.png"
            alt="Live from space album cover"
        />
          <CardMedia
            component="img"
            sx={{ width: 300, height: 200, ':hover': { opacity: 0.5 } }}
            image="/images/empresas-exemple.png"
            alt="Live from space album cover"
        />

      </Card>
  )
}

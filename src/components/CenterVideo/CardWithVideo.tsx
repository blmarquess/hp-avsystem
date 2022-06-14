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
      <Box sx={{ position: 'relative', width: 300, height: 200 }}>
      <CardMedia
            component="img"
            sx={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              position: 'absolute',
              top: '25%',
              left: '35%',
              opacity: 0,
              transition: 'linear 0.2s',
              ':hover': {
                opacity: 0.70,
                transition: 'linear 0.2s',
                zIndex: 100,
                cursor: 'pointer'
              }
            }}
            image="/images/icons/playing.png"
            alt="Live from space album cover"
        />
          <CardMedia
            component="img"
            sx={{ width: 300, height: 200 }}
            image="/images/empresas-exemple.png"
            alt="Live from space album cover"
        />
      </Box>

      </Card>
  )
}

import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { ServiceType } from '../../mocks/servicos'
import ServicosCard from './ServicosCard'

export default function ServicosBlock (props: { servicos: ServiceType[] }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mt: 4, justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4" sx={{ color: '#3AB54A' }}>
          NOSSOS
        </Typography>
        <Typography variant="h4" sx={{ color: '#030403', fontWeight: 'extrabold', ml: 1 }}>
          SERVIÇOS
        </Typography>
      </Box>

      <Grid sx={{ my: 6, columns: 3, direction: 'row' }} >
        {props.servicos?.map((service: ServiceType) => (
          <Grid item key={service.id} sx={{ height: 100, my: 2 }}>
            <ServicosCard {...service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

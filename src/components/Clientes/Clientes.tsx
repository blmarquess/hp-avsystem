/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Box, ImageListItem, Typography } from '@mui/material'
import { ClienteImgType } from '../../mocks/servicos'

export default function Clientes (props: { clientes: ClienteImgType[] }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mt: 4, justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4" sx={{ color: '#3AB54A' }}>
          NOSSOS
        </Typography>
        <Typography variant="h4" sx={{ color: '#030403', fontWeight: 'extrabold', ml: 1 }}>
          CLIENTES
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', mt: 4, height: 500 }} component="div">
        {props.clientes?.map((cli: ClienteImgType) => (
            <ImageListItem key={cli.id} sx={{ width: 250, height: 150 }}>
              <img src={`${cli.imageUrl}?w=164&h=164&fit=crop&auto=format`} alt={cli.imageUrl} />
            </ImageListItem>
        ))}
      </Box>
    </Box>
  )
}

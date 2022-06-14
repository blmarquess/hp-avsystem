import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import SimpleLinks from '../base/SimpleLinks'

export default function Header () {
  return (
    <Grid container alignItems="center" sx={{
      justifyContent: 'space-between',
      decoration: 'none',
      mt: 2
    }}>
      <Box>
        <Box display="flex" alignItems="center">
              <Image src="/images/logo-header.png" alt="AV System Logo" width={(551 * 0.55)} height={(116 * 0.55)} />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" sx={{ textDecoration: 'none' }}>
        <SimpleLinks href="https://www.avsystem.com/">HOME</SimpleLinks>
        <SimpleLinks href="https://www.avsystem.com/">QUEM SOMOS</SimpleLinks>
        <SimpleLinks href="https://www.avsystem.com/">SERVIÇOS</SimpleLinks>
        <SimpleLinks href="https://www.avsystem.com/">CLIENTES</SimpleLinks>
        <SimpleLinks href="https://www.avsystem.com/">CASES</SimpleLinks>
        <SimpleLinks href="https://www.avsystem.com/">SISTEMAS</SimpleLinks>
        <SimpleLinks href="https://www.avsystem.com/">CONTATO</SimpleLinks>
      </Box>
    </Grid>
  )
}

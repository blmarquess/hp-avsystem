import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function Onfocus () {
  return (
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Box sx={{ justifyContent: 'center', alignItems: 'center', padding: 4, m: 'auto' }}>
        <Typography variant="h6">
          CONECTIVIDADE EMPRESA E CAMPO EM TEMPO REAL
        </Typography>
        <Typography variant="body2">
          EXPERIMENTE NOSSA SOLUÇÃO EM SOFTWARE DE GERENCIAMENTO DE PROJETO NAS
          ÁREAS DE ENERGIA, MINERAÇÃO, LOGÍSTICA, TRANSPORTE, ETC.
        </Typography>
      </Box>
      <Box>
        <Image src="/images/img_pcs.png" alt="AV System Logo" width={(1005.05 * 0.55)} height={(779 * 0.55)} />
      </Box>
</Stack>

  )
}

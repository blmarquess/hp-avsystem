import React from 'react'
import type { NextPage } from 'next'
import { Box, Container } from '@mui/material'

import MetaData from '@components/metaDatas/metas'
import Header from '@components/header/Header'
import Onfocus from '@components/Onfocus/Onfocus'
import CardWithVideo from '@components/CenterVideo/CardWithVideo'
import ServicosBlock from '@components/Servicos/ServicosBlock'
import GraphicPizza from '@components/graphicPizza/GraphicPizza'
import ImageBGEletrica from '@components/base/ImageBGEletrica'

const Home: NextPage = () => {
  return (
    <>
      <MetaData />
      <Container>
        <Header />
        <Onfocus />
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 2 }}>
          <CardWithVideo />
        </Box>
        <ServicosBlock />
        <GraphicPizza />
        <ImageBGEletrica />
      </Container>
    </>
  )
}

export default Home

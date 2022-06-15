import React from 'react'
import { GetStaticProps } from 'next'

import { Box, Container } from '@mui/material'

import MetaData from '@components/metaDatas/metas'
import Header from '@components/header/Header'
import Onfocus from '@components/Onfocus/Onfocus'
import CardWithVideo from '@components/CenterVideo/CardWithVideo'
import ServicosBlock from '@components/Servicos/ServicosBlock'
import GraphicPizza from '@components/graphicPizza/GraphicPizza'
import ImageBGEletrica from '@components/base/ImageBGEletrica'
import Clientes from '@components/Clientes/Clientes'
import Footer from '@components/Footer/Footer'
import LineHistoric from '@components/Historic/LineHistoric'

import { Historic, ClienteImgType, ServiceType } from '@data/servicos'

type IProps = {
  historic: Historic[];
  clientes: ClienteImgType[];
  servicos: ServiceType[];
}

const Home = (props: IProps) => {
  return (
    <>
      <MetaData />
      <Container>
        <Header />
        <Onfocus />
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 2 }}>
          <CardWithVideo />
        </Box>
        <ServicosBlock servicos={ props.servicos } />
        <GraphicPizza />
        <ImageBGEletrica />
        <LineHistoric historic={ props.historic } />
        <Clientes clientes={ props.clientes } />
        <Footer />
      </Container>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const API_URI = process.env.PUBLIC_NEXT_APP_API_URI || 'http://localhost:3000/api'
  const historic: Historic[] = await fetch(`${API_URI}/historic`).then(res => res.json())
  const clientes: ClienteImgType[] = await fetch(`${API_URI}/clientes`).then(res => res.json())
  const servicos: ServiceType[] = await fetch(`${API_URI}/servicos`).then(res => res.json())
  return { props: { historic, clientes, servicos } }
}

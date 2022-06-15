import { NextApiRequest, NextApiResponse } from 'next/types'
import { IMAGES_CLIENTES, ClienteImgType } from '@data/servicos'

export default function handler (req: NextApiRequest, res: NextApiResponse<ClienteImgType[]>) {
  if (req.method === 'GET') return res.status(200).json(IMAGES_CLIENTES)
}

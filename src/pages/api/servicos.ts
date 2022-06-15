import { NextApiRequest, NextApiResponse } from 'next/types'
import { MOCK_SERVICOS, ServiceType } from '@data/servicos'

export default function handler (req: NextApiRequest, res: NextApiResponse<ServiceType[]>) {
  if (req.method === 'GET') return res.status(200).json(MOCK_SERVICOS)
}

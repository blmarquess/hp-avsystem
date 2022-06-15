import { NextApiRequest, NextApiResponse } from 'next/types'
import { DATA_HISTORY, Historic } from '@data/servicos'

export default function handler (req: NextApiRequest, res: NextApiResponse<Historic[]>) {
  if (req.method === 'GET') return res.status(200).json(DATA_HISTORY)
  return res.status(400)
}

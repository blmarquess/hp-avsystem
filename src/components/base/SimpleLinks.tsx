import { Link } from '@mui/material'
import React from 'react'

type Props = {
  href: string;
  children: React.ReactNode;
}

export default function SimpleLinks ({ children, href }: Props) {
  return (
      <Link mr={2} sx={{ textDecoration: 'none' }} href={href} >
      {children}
      </Link>
  )
}

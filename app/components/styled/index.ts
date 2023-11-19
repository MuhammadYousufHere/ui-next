'use client'

import { AppBar } from '@mui/material'
import { styled } from '@mui/material/styles'

export const RootStyle = styled(AppBar)(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '0.5rem',
  boxShadow: '0 2px 2px -2px gray'
}))

export const Wrapper = styled('section')`
  display: flex;
  gap: 1rem;
  align-items: center;
`

import { Container, Stack } from '@mui/material'
import React, { type ReactNode } from 'react'
import Appbar from './AppHeader'
import { HEADER } from '../config/constants'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: '100dvh'
      }}
    >
      <Appbar />

      <Stack sx={{ pt: `${HEADER.MOBILE_HEIGHT + 30}px`, height: '100%' }}>
        {children}
      </Stack>
    </Container>
  )
}

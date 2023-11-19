import { Typography } from '@/app/components/common'
import { Stack } from '@mui/material'
import React from 'react'

type Props = { label: string }

export function TypesComponent({ label }: Props) {
  return (
    <Stack sx={{ pt: 3, mb: 1 }}>
      <Typography variant='subtitle1' sx={{ fontSize: '0.9rem' }}>
        {label}
      </Typography>
    </Stack>
  )
}

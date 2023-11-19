import { Typography } from '@/app/components/common'
import { Stack } from '@mui/material'
import React from 'react'

interface Props {
  label: string
  description: string
}

export function ManageHeader({ label, description }: Props) {
  return (
    <Stack sx={{ pt: 3, mb: 1 }}>
      <Typography variant='h6' sx={{ color: 'text.main' }}>
        {label}
      </Typography>
      <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
        {description}
      </Typography>
    </Stack>
  )
}

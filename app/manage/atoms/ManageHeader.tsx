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
      <Typography variant='h6'>{label}</Typography>
      <Typography variant='subtitle2' sx={{ color: '#d0cfd1' }}>
        {description}
      </Typography>
    </Stack>
  )
}

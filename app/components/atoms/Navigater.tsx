'use client'

import { Button } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { useRouter } from 'next/navigation'

export function Navigater() {
  const router = useRouter()
  return (
    <Button
      disableRipple
      onClick={() => router.back()}
      sx={{
        borderRadius: '8px',
        p: 1.3,
        color: '#f5f5f5',
        background: theme => theme.palette.primary.light,
        minWidth: 'max-content',
        '&:hover': {
          background: theme => theme.palette.primary.light,
          boxShadow: 2
        }
      }}
    >
      <KeyboardBackspaceIcon />
    </Button>
  )
}

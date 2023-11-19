'use client'

import { Button } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

export function Navigater() {
  return (
    <Button
      disableRipple
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

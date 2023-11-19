import { Box } from '@mui/material'
import React from 'react'

export function Divider() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '1px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '1px 1px 7px rgba(0, 0, 0, 0.87)',
        my: 1
      }}
    />
  )
}

export default Divider

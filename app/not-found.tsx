import React from 'react'

import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { Button } from './components/common'

const NotFound = () => {
  return (
    <Box
      sx={{
        borderRadius: '4px',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px'
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 64, color: '#888' }} />
      <Typography variant='h6' align='center' my={2} color='textSecondary'>
        Page does not exist!
      </Typography>
      <Link href='/'>
        <Button as='Outlined' label='Go to home' />
      </Link>
    </Box>
  )
}

export default NotFound

import { Typography } from '@/app/components/common'
import { Box, Button, Container, Stack } from '@mui/material'
import React from 'react'

export default function Actions() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        bgcolor: 'primary.main',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '1px 1px -7px rgba(0, 0, 0, 0.87)',
        py: 3,
        px: 4,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Button
        variant='outlined'
        sx={{
          borderRadius: '100vmax',
          maxWidth: 'fit-content',
          borderColor: 'text.secondary',
          color: 'common.white',
          fontWeight: 300,
          fontSize: '0.82rem',

          px: 6,
          textTransform: 'capitalize'
        }}
      >
        Back
      </Button>
      <Button
        variant='contained'
        sx={{
          borderRadius: '100vmax',
          background: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minWidth: 130,
          fontWeight: 300,
          fontSize: '0.82rem',
          textTransform: 'capitalize',
          '&:hover': {
            bgcolor: '#f9f8f9'
          },
          '& p, & small': {
            background:
              '-webkit-linear-gradient(rgba(82,63,215,1) , rgba(255,125,255,1) )',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '0.9rem'
          }
        }}
      >
        <Typography display='flex'>Next</Typography>
        <Box
          display='flex'
          sx={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Typography
            component={'small'}
            sx={{ fontSize: '0.8rem !important', fontWeight: 600 }}
          >
            &gt;
          </Typography>
          <Typography
            component={'small'}
            sx={{ fontSize: '1rem !important', fontWeight: 600 }}
          >
            &gt;
          </Typography>
        </Box>
      </Button>
    </Container>
  )
}

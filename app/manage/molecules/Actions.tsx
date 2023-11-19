import { Button, Typography } from '@/app/components/common'
import { Box, Button as MuiButton, Container, Stack } from '@mui/material'
import React from 'react'

interface Props {
  onNext?: () => void
  onBack?: () => void
}
export default function Actions(props: Props) {
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
      <Button as='Outlined' onClick={props.onBack} label='Back' />

      <Button label='Next' onClick={props.onNext} as='Solid'>
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

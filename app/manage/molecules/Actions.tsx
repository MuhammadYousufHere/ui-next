'use client'
import { Button, Typography } from '@/app/components/common'
import { useManage } from '@/app/context'
import { Box, Button as MuiButton, Container, Stack } from '@mui/material'
import React from 'react'

export function Actions() {
  const { onNext, onBack } = useManage()

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
        gap: 1,
        justifyContent: 'space-between',
        flexDirection: ['column', 'row', 'row', 'row'],
        alignItems: 'center'
      }}
    >
      <Button
        as='Outlined'
        onClick={onBack}
        label='Back'
        sx={{
          width: '100%',
          maxWidth: ['none', 'fit-content', 'fit-content', 'fit-content']
        }}
      />

      <Button
        label='Next'
        onClick={onNext}
        as='Solid'
        sx={{
          width: '100%',
          maxWidth: ['none', 'fit-content', 'fit-content', 'fit-content'],
          justifyContent: [
            'center',
            'space-between',
            'space-between',
            'space-between'
          ]
        }}
      >
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
export default Actions

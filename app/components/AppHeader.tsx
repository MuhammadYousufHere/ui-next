import { AppBar, Toolbar, styled, Button, Box, Stack } from '@mui/material'
import React from 'react'
import { Avatar, Typography } from './common'
import ThemeSwitch from './ThemeSwitch'
import { RootStyle, Wrapper } from './styled'
import { Navigater } from './atoms'
import Image from 'next/image'

export default function AppHeader() {
  return (
    <RootStyle elevation={0}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Wrapper>
          <Navigater />
          <Stack gap={0}>
            <Box sx={{ display: 'flex', gap: 0.8, alignItems: 'center' }}>
              <Typography
                sx={{
                  margin: 0,
                  fontWeight: 500,
                  color: '#f5f5f5',
                  lineHeight: 1.3
                }}
                variant='subtitle1'
              >
                Media management{' '}
              </Typography>
              <Image
                width={16}
                height={16}
                alt='edit'
                loading='eager'
                quality={100}
                src='static/icons/edit.svg'
              />
            </Box>
            <Typography
              variant='subtitle2'
              sx={{ color: '#f8f9f9', lineHeight: 1.3, fontWeight: 300 }}
            >
              Draft Campaign{' '}
            </Typography>
          </Stack>
        </Wrapper>
        <Wrapper>
          <Stack gap={0} display={['none', 'none', 'flex', 'flex']}>
            <Typography
              sx={{
                margin: 0,
                fontWeight: 500,
                color: '#f5f5f5',
                lineHeight: 1.3
              }}
              variant='subtitle1'
            >
              Jane Cooper
            </Typography>
            <Typography
              component={'a'}
              variant='subtitle2'
              sx={{
                lineHeight: 1.3,
                fontWeight: 300,
                textDecoration: 'underline',
                color: 'pink'
              }}
            >
              Change profile
            </Typography>
          </Stack>
          <Avatar src='static/img/avatar.png' alt='avatar' />
        </Wrapper>
      </Toolbar>
    </RootStyle>
  )
}

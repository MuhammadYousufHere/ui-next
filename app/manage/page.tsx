import { Container, Stack } from '@mui/material'
import React from 'react'
import { ManageHeader } from './atoms'
import { Divider } from '../components/common'
import { ContentTypes, Actions } from './molecules'
import { ManageProvider } from '../context'

export default function Manage() {
  return (
    <ManageProvider>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          height: '100%',
          px: 4
        }}
      >
        <Stack sx={{ width: '100%' }}>
          <ManageHeader
            label='Content type'
            description='Choose a content type that best fits your needs.'
          />
          <Divider />
          <ContentTypes />
        </Stack>
      </Container>

      <Actions />
    </ManageProvider>
  )
}

'use client'

import { TypesComponent } from '../atoms'
import { PillButton } from '@/app/components/common'
import { contentTypes } from '@/data'
import { Box, Stack } from '@mui/material'
import { useState } from 'react'
import SelectTypes from './SelectTypes'
import { TypeRange } from '.'

interface Props {}
export function ContentTypes(props: Props) {
  const [active, setActive] = useState('Fun')
  return (
    <Stack>
      <TypesComponent label='What type of content are you creating?' />
      <Box
        display='flex'
        maxWidth='fit-content'
        flexWrap='wrap'
        gap={1}
        my={0.5}
      >
        {contentTypes.map(content => (
          <PillButton
            label={content.type}
            key={content.type}
            onClick={() => setActive(content.type)}
            isActive={content.type.toLowerCase() === active.toLowerCase()}
          />
        ))}
      </Box>
      <SelectTypes type={active} />
      <TypeRange />
    </Stack>
  )
}

export default ContentTypes

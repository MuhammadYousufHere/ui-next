'use client'

import { TypesComponent } from '../atoms'
import { PillButton } from '@/app/components/common'
import { contentTypes } from '@/data'
import { Box, Stack } from '@mui/material'
import { useState } from 'react'
import SelectTypes, { Options } from './SelectTypes'
import { TypeRange } from '.'
import { useManage } from '@/app/context'

interface Props {}
export function ContentTypes(props: Props) {
  const [active, setActive] = useState('Fun')

  const { values, onSetValues } = useManage()

  /*
   * Filter out the options
   */
  const options: Options[] = contentTypes
    .filter(option => option.type.toLowerCase() === active.toLowerCase())
    .reduce((curr: Options[], atom) => {
      return curr.concat(
        atom.subtypes.map(subtype => ({
          value: subtype,
          label: subtype
        }))
      )
    }, [])

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
            onClick={() => {
              setActive(content.type)
              onSetValues(prev => ({ ...prev, contentType: content.type }))
            }}
            isActive={content.type.toLowerCase() === active.toLowerCase()}
          />
        ))}
      </Box>
      <SelectTypes
        type={active}
        options={options}
        value={values.subType}
        onChange={o => {
          if (o?.value) {
            onSetValues(prev => ({
              ...prev,
              subType: o.value
            }))
          }
        }}
      />
      <TypeRange
        onChange={e => {
          onSetValues(prev => ({
            ...prev,
            wordRange: e.target.value
          }))
        }}
      />
    </Stack>
  )
}

export default ContentTypes

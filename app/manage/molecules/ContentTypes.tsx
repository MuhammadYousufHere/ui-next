'use client'

import { TypesComponent } from '../atoms'
import { PillButton } from '@/app/components/common'
import { contentTypes } from '@/data'
import { Box, Stack } from '@mui/material'
import { useState } from 'react'
import SelectTypes, { Options } from './SelectTypes'
import { TypeRange } from '.'

interface Props {}
export function ContentTypes(props: Props) {
  const [active, setActive] = useState('Fun')

  const [formData, setFormData] = useState({
    contentType: active,
    subType: '',
    wordRange: ''
  })

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

  console.log(formData)
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
              setFormData(prev => ({ ...prev, contentType: content.type }))
            }}
            isActive={content.type.toLowerCase() === active.toLowerCase()}
          />
        ))}
      </Box>
      <SelectTypes
        type={active}
        options={options}
        value={formData.subType}
        onChange={o => {
          if (o?.value) {
            setFormData(prev => ({
              ...prev,
              subType: o.value
            }))
          }
        }}
      />
      <TypeRange
        onChange={e =>
          setFormData(prev => ({
            ...prev,
            wordRange: e.target.value
          }))
        }
      />
    </Stack>
  )
}

export default ContentTypes

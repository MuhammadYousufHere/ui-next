import { DropdownSelect } from '@/app/components/Form'
import { Typography } from '@/app/components/common'
import { contentTypes } from '@/data'
import { Stack } from '@mui/material'
import React, { useRef } from 'react'

interface Props {
  type: string
}
type Options = { label: string; value: string }
export default function SelectTypes({ type }: Props) {
  const typesRef = useRef<HTMLInputElement>(null)

  const options: Options[] = contentTypes
    .filter(option => option.type.toLowerCase() === type.toLowerCase())
    .reduce((curr: Options[], atom) => {
      return curr.concat(
        atom.subtypes.map(subtype => ({
          value: subtype,
          label: subtype
        }))
      )
    }, [])
  return (
    <Stack sx={{ pt: 2, pb: 1, gap: 1 }}>
      <Typography variant='subtitle1' sx={{ fontSize: '0.9rem' }}>
        Which type of {`"${type}"`} content do you want to create
      </Typography>
      <DropdownSelect
        name='fun'
        widthType='default'
        options={options}
        ref={typesRef}
        placeholder='Select'
        // value={''}
        onBlur={() => {}}
        handleChange={e => {}}
      />
    </Stack>
  )
}

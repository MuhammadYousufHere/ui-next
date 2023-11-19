import { DropdownSelect } from '@/app/components/Form'
import { Typography } from '@/app/components/common'
import { contentTypes } from '@/data'
import { Stack } from '@mui/material'
import React, { ChangeEvent, useRef } from 'react'

interface Props {
  type: string
  options: Options[]
  value: string
  onChange: (_newValue: Options) => void
}
export type Options = { label: string; value: string }

export default function SelectTypes({ type, options, value, onChange }: Props) {
  const typesRef = useRef<HTMLInputElement>(null)

  return (
    <Stack sx={{ pt: 2, pb: 1, gap: 1 }}>
      <Typography variant='subtitle1' sx={{ fontSize: '0.9rem' }}>
        Which type of {`"${type}"`} content do you want to create
      </Typography>
      <DropdownSelect
        name='contentsubtype'
        widthType='default'
        options={options}
        ref={typesRef}
        placeholder='Select'
        value={value}
        handleChange={onChange}
      />
    </Stack>
  )
}

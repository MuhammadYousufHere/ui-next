import { Slider } from '@/app/components/Form'
import { Typography } from '@/app/components/common'
import { Box, Stack } from '@mui/material'
import React, { ChangeEvent } from 'react'

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export function TypeRange(props: Props) {
  return (
    <Stack mb={2} mt={0.6}>
      <Typography variant='subtitle1' sx={{ fontSize: '0.9rem' }}>
        Set the number of words for output text.
      </Typography>
      <Box
        sx={{
          bgcolor: 'primary.main',
          borderRadius: '8px',
          mt: [3, 4, 4, 4],
          p: [0.5, 1, 1, 1],
          px: [2, 2, 1.5, 1.5],
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          justifyContent: 'center',
          maxWidth: '370px'
        }}
      >
        <Typography variant='subtitle2' sx={{ fontSize: '0.75rem' }}>
          100
        </Typography>
        <Slider
          defaultValue={200}
          min={100}
          max={1000}
          valueLabelDisplay='on'
          // @ts-ignore
          onChange={props.onChange}
        />
        <Typography variant='subtitle2' sx={{ fontSize: '0.75rem' }}>
          1000
        </Typography>
      </Box>
    </Stack>
  )
}

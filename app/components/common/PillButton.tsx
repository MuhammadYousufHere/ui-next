'use client'

import { Button, ButtonProps } from '@mui/material'
import { motion, m, MotionProps } from 'framer-motion'

interface Props extends ButtonProps {
  label: string
  isActive?: boolean
}

const WithMotion = motion(Button)
export function PillButton({ label, isActive, ...rest }: Props) {
  return (
    <WithMotion
      onClick={rest.onClick}
      variant={isActive ? 'contained' : 'outlined'}
      color='secondary'
      sx={{
        borderRadius: '100vmax',
        maxWidth: 'fit-content',
        borderColor: isActive ? '' : 'text.secondary',
        color: isActive ? 'common.white' : 'text.primary',
        fontWeight: 300,
        fontSize: '0.82rem',
        textTransform: 'capitalize'
      }}
      whileHover={{ scale: 1.05 }}
    >
      {label}
    </WithMotion>
  )
}

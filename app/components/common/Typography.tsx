'use client'

import {
  type TypographyProps as MuiTypogaphyProps,
  Typography as MuiTypography
} from '@mui/material'
import { type Theme, useTheme } from '@mui/material/styles'
import { FunctionComponent } from 'react'

export interface TypographyProps extends MuiTypogaphyProps {
  color?: keyof Theme['palette']
}

export const Typography: FunctionComponent<TypographyProps> = ({
  color,
  children,
  ...rest
}) => {
  const theme = useTheme()

  return (
    <MuiTypography
      color={
        color ? theme.palette.primary.contrastText : theme.palette.text.primary
      }
      {...rest}
    >
      {children}
    </MuiTypography>
  )
}

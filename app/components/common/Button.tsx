import { Button as MuiButton, ButtonProps } from '@mui/material'
import { Typography } from '.'
import { PropsWithChildren } from 'react'

interface Props extends ButtonProps {
  label: string
  as: 'Outlined' | 'Solid'
}
export function Button({
  label,
  as,
  children,
  ...rest
}: PropsWithChildren<Props>) {
  const outlined = (
    <MuiButton
      variant='outlined'
      sx={{
        borderRadius: '100vmax',
        // maxWidth: 'fit-content',
        borderColor: 'text.secondary',
        color: 'common.white',
        fontWeight: 300,
        fontSize: '0.82rem',

        px: 6,
        textTransform: 'capitalize',
        '&:hover, &:active': {
          borderColor: 'secondary.main'
        },
        ...rest.sx
      }}
    >
      {label}
    </MuiButton>
  )
  const solid = (
    <MuiButton
      variant='contained'
      {...rest}
      sx={{
        borderRadius: '100vmax',
        background: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: 130,
        fontWeight: 300,
        fontSize: '0.82rem',
        gap: 1,
        textTransform: 'capitalize',
        transition: 'all 0.4s ease-in-out',
        '&:hover, &:active': {
          bgcolor: '#f9f8f9',
          paddingRight: '20px'
        },
        '& p, & small': {
          background:
            '-webkit-linear-gradient(rgba(82,63,215,1) , rgba(255,125,255,1) )',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '0.9rem'
        },
        ...rest.sx
      }}
    >
      <Typography>{label}</Typography>
      {children}
    </MuiButton>
  )
  switch (as) {
    case 'Outlined':
      return outlined
    case 'Solid':
      return solid
    default:
      outlined
      break
  }
}

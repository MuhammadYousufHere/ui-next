import { Button, ButtonProps } from '@mui/material'

interface Props extends ButtonProps {
  label: string
  isActive?: boolean
}
export function PillButton({ label, isActive, ...rest }: Props) {
  return (
    <Button
      {...rest}
      variant={isActive ? 'contained' : 'outlined'}
      color='secondary'
      sx={{
        borderRadius: '100vmax',
        maxWidth: 'fit-content',
        borderColor: isActive ? '' : 'text.secondary',
        color: 'text.primary',
        fontWeight: 300,
        fontSize: '0.82rem',
        textTransform: 'capitalize'
      }}
    >
      {label}
    </Button>
  )
}

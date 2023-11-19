import { Avatar as MuiAvatar } from '@mui/material'

type Props = { src: string; alt: string }
export function Avatar({ alt, src }: Props) {
  return (
    <MuiAvatar
      src={src}
      alt={alt}
      sx={{
        borderRadius: '6px'
      }}
    />
  )
}

import {
  type FocusEvent,
  useState,
  ForwardRefRenderFunction,
  forwardRef,
  ForwardedRef
} from 'react'
import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material'

import { styled } from '@mui/material/styles'
import { TextInputProps } from './types'

export const StyledRootElement = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
`

export const StyledInput = styled('input')`
  width: 100%;
  display: flex;
  flex-grow: 1;
  background: transparent;
  color-scheme: normal;
  border-width: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  padding: 0.8rem;
  font-size: 0.85rem;
  &:focus {
    outline: red;
  }

  /* Hide number arrows - Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::placeholder {
    font-weight: 500;
    font-size: 1rem;
    opacity: 0.9;
    color: #f9f8f9;
  }

  /* Hide number arrows - Firefox */
  &: [type=number] {
    -moz-appearance: textfield;
  }

  /* Change date "placeholder" text color to match other fields*/
  &[type='date']:not([value*='-'])::-webkit-datetime-edit {
  }
`

const TextInput: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (
  {
    disabled = false,
    endAdornment,
    errorMessage,
    label,
    onBlur,
    onFocus,
    startAdornment,
    tooltipText = '',
    widthType = 'default',
    ...rest
  },
  ref: ForwardedRef<HTMLInputElement>
) => {
  const theme = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  /**
   * Calls any onFocus prop being passed and then updates local state
   */
  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (onFocus) {
      onFocus(event)
    }

    setIsFocused(true)
  }
  /**
   * Calls any onBlur prop being passed and then updates local state
   */
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event)
    }

    setIsFocused(false)
  }
  return (
    <Stack
      direction='column'
      spacing='4px'
      sx={{
        margin: ['0 1', '0 auto', '0.4rem 0'],
        maxWidth: widthType === 'default' ? '470px' : '100%',
        opacity: disabled ? 0.5 : 1,
        textAlign: 'left',
        width: '100%',
        marginBlock: '3rem'
      }}
    >
      {!!label && (
        <Typography columnGap={0.5} display='flex' fontWeight={500}>
          <>
            <Typography component='span' sx={{ fontWeight: 500 }}>
              {label}
            </Typography>
          </>
        </Typography>
      )}
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          background: theme.palette.background.paper,
          borderColor: theme.palette.background.paper,
          ...((isHovered || isFocused) && {
            border: 'double 3px transparent',
            backgroundImage: `linear-gradient(${theme.palette.background.paper}, ${theme.palette.background.paper}), linear-gradient(to right, rgba(82,63,215,1) , rgba(255,125,255,1))`,
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box'
          }),
          borderStyle: 'solid',
          borderWidth: 1,
          borderRadius: '6px',
          overflow: 'hidden',
          '&.focused': {
            // boxShadow: `0 0 0 3px ${
            //   theme.palette.mode === 'dark' ? blue[500] : blue[200]
            // }`
          }
        }}
      >
        <StyledRootElement>
          {startAdornment}

          <StyledInput
            {...rest}
            disabled={disabled}
            onBlur={handleBlur}
            onFocus={handleFocus}
            style={{ color: theme.palette.text.primary }}
            ref={ref}
          />

          {endAdornment}
        </StyledRootElement>
      </Box>
    </Stack>
  )
}

export default forwardRef(TextInput)

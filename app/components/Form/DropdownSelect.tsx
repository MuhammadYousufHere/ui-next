'use client'

import {
  ForwardRefRenderFunction,
  ForwardedRef,
  HTMLProps,
  KeyboardEvent,
  forwardRef
} from 'react'

import { useTheme, styled } from '@mui/material/styles'
import { useAutocomplete } from '@mui/base'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { WidthType } from './types'
import { Box } from '@mui/material'
import TextInput from './Input'
import { NoResultsText, ResultsList } from './atoms'

type Value = string | number
type Options = {
  label: string
  value: Value
}
export interface DropdownSelectProps
  extends Omit<HTMLProps<HTMLInputElement>, 'as' | 'ref'> {
  readonly disabled?: boolean
  readonly errorMessage?: string
  readonly handleChange?: (_newValue: Options) => void
  readonly label?: string
  readonly isOptional?: boolean
  readonly name: string
  readonly tooltipText?: string
  readonly noResultsText?: string
  readonly options: Options[]
  readonly placeholder?: string
  readonly widthType?: WidthType
  readonly startAdornment?: JSX.Element
  readonly glowAdornment?: boolean
}

const DropdownSelect: ForwardRefRenderFunction<
  HTMLInputElement,
  DropdownSelectProps
> = (
  {
    disabled,
    errorMessage,
    handleChange,
    label,
    name,
    noResultsText = 'Nothing found',
    options,
    placeholder,
    value,
    widthType,
    startAdornment,
    glowAdornment = false,
    ...rest
  },
  ref: ForwardedRef<HTMLInputElement>
) => {
  const {
    getInputProps,
    getListboxProps,
    getOptionProps,
    getRootProps,
    groupedOptions,
    popupOpen,
    inputValue,
    focused,
    dirty
  } = useAutocomplete({
    id: name,
    getOptionLabel: option => option.label,
    onChange: (_event, newValue) => {
      if (handleChange) {
        handleChange(newValue as Options)
      }
    },
    isOptionEqualToValue(option, currOpt) {
      return option.value === currOpt.value
    },
    options
  })
  const hasResults = groupedOptions.length > 0
  const showNoResults = !hasResults && popupOpen
  /**
   * This prevents a form submission when input
   * text does not match any options.
   */
  const preventFormSubmit = (event: KeyboardEvent): void => {
    if (event.key === 'Enter' && inputValue !== value) event.preventDefault()
  }
  return (
    <Box
      sx={{
        ...(widthType === 'default' && { maxWidth: '470px' }),
        position: 'relative',
        width: '100%'
      }}
    >
      <div {...getRootProps()} style={{ width: '100%' }}>
        <TextInput
          {...rest}
          {...getInputProps()}
          disabled={disabled}
          value={
            !dirty && !focused
              ? value
              : focused && !dirty
                ? inputValue
                : dirty && focused
                  ? inputValue
                  : value
          }
          startAdornment={startAdornment}
          containerClassname={glowAdornment && focused ? 'focused' : undefined}
          endAdornment={
            <KeyboardArrowDownIcon
              sx={{
                color: 'white',
                transform: popupOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
                transition: 'transform 200ms ease-in',
                mr: 1
              }}
            />
          }
          errorMessage={errorMessage}
          label={label}
          name={name}
          placeholder={placeholder}
          onKeyDown={preventFormSubmit}
        />
      </div>
      {hasResults && (
        <ResultsList {...getListboxProps()}>
          {(groupedOptions as typeof options).map((option, index) => (
            <li {...getOptionProps({ option, index })} key={index}>
              {option.label}
            </li>
          ))}
        </ResultsList>
      )}

      {showNoResults ? <NoResultsText>{noResultsText}</NoResultsText> : null}
    </Box>
  )
}

export default forwardRef(DropdownSelect)

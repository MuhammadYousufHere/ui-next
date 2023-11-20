'use client'

import { styled } from '@mui/material/styles'
import { Slider as MuiSlider } from '@mui/material'

export const Slider = styled(MuiSlider)(({ theme }) => ({
  color: '#3a3940',
  backgroundClip: 'content-box',
  borderRadius: '10px',
  height: 3,
  '& .MuiSlider-track': {
    backgroundImage:
      '-webkit-linear-gradient(90deg,rgba(82,63,215,1) 0%, rgba(255,125,255,1) 100%)',
    background:
      'linear-gradient(90deg, rgba(82,63,215,1) 0%, rgba(255,125,255,1) 100%)',
    border: 'none'
  },
  '& .MuiSlider-thumb': {
    height: 16,
    width: 16,
    backgroundColor: 'transparent',
    padding: 1,

    border: '2px solid rgba(255,125,255,1)',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit'
    },
    '&:before': {
      width: '6px',
      height: '6px',
      backgroundColor: 'rgba(255,125,255,1)',
      border: '2px solid transparent'
    }
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 40,
    height: 22,
    borderRadius: '100vmax',
    backgroundColor: theme.palette.secondary.main,
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(0%, -100%) rotate(0deg) scale(1)'
    },
    '& > *': {
      transform: 'rotate(0deg)'
    }
  }
}))

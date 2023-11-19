import { styled } from '@mui/material/styles'

export const ResultsList = styled('ul')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  listStyle: 'none',
  margin: '4px 0 0 0',
  maxHeight: '240px',
  overflow: 'auto',
  padding: 0,
  position: 'absolute',
  width: '100%',
  zIndex: 10,
  fontFamily: 'inherit',
  fontSize: '0.9rem',
  fontWeight: 400,
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  scrollbarGutter: 'stable',
  color: theme.palette.common.white,
  '& li': {
    cursor: 'pointer',
    padding: '12px 12px',
    minHeight: '44px',

    '&.Mui-focused': {
      backgroundColor: ''
    }
  },
  '::-webkit-scrollbar': {
    width: '0.4em'
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.background.paper
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '100vmax'
  },
  '::-webkit-scrollbar-button': {
    backgroundColor: 'transparent'
  },
  '::-webkit-scrollbar-corner': {
    backgroundColor: 'black'
  }
}))

export const NoResultsText = styled('span')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  color: theme.palette.common.white,
  margin: '4px 0 0 0',
  padding: '12px 12px',
  position: 'absolute',
  width: '100%',
  fontSize: '0.9rem',
  fontFamily: 'inherit'
}))

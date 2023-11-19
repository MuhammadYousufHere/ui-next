import { styled } from '@mui/material/styles'

export const ResultsList = styled('ul')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  listStyle: 'none',
  margin: '4px 0 0',
  maxHeight: '200px',
  overflow: 'auto',
  padding: 0,
  position: 'absolute',
  width: '100%',
  zIndex: 10,
  marginTop: '1px',
  fontFamily: 'inherit',
  fontSize: '0.9rem',
  fontWeight: 400,
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  color: theme.palette.common.white,
  '& li': {
    cursor: 'pointer',
    padding: '12px 12px',
    minHeight: '44px',

    '&.Mui-focused': {
      backgroundColor: ''
    }
  }
}))

export const NoResultsText = styled('span')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  color: theme.palette.common.white,
  margin: '4px 0 0',
  padding: '12px 12px',
  position: 'absolute',
  width: '100%',
  marginTop: '1px',
  fontSize: '0.9rem',
  fontFamily: 'inherit'
}))

import { createTheme } from '@mui/material/styles'

const light = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#fff',
      paper: ''
    },
    text: {
      primary: '#000'
    },
    primary: {
      main: '#000'
    },
    secondary: {
      main: '#fff'
    }
  }
})

const dark = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#12111a',
      paper: '#12111a'
    },
    text: {
      primary: '#fff'
    },
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#000'
    }
  }
})

const themes = {
  light,
  dark
}

export default themes

import { createTheme } from '@mui/material/styles'
import { Poppins } from 'next/font/google'

declare module '@mui/material/styles' {
  interface Theme {
    colors: {}
    inputField: {
      borderWidth: string
      fontFamily: string
      fontSize: string
      fontStyle: string
      fontWeight: number
      lineHeight: string
      minWidth: string
      maxWidth: string
      padding: string
    }
    gradients: {}
    button: {}
  }
}

interface ThemeOptions {
  colors?: {}
  inputField?: {
    fontFamily?: string
    fontStyle?: string
    fontSize?: string
    fontWeight?: number
    lineHeight?: string
    borderWidth?: string
    minWidth?: string
    maxWidth?: string
    padding?: string
  }
  gradients?: {}
  button?: {}
}
const common = { black: '#000', white: '#fff' }
const poppins = Poppins({ weight: ['500', '600', '700'], subsets: ['latin'] })

const light = createTheme({
  palette: {
    common,
    mode: 'light',
    background: {
      default: '#f7f9fb',
      paper: '#26242d'
    },
    text: {
      primary: '#000',
      secondary: '#262626'
    },
    primary: {
      main: '#000'
    },
    secondary: {
      main: '#523fd7'
    }
  },
  typography: {
    fontFamily: poppins.style.fontFamily
  }
})

const dark = createTheme({
  palette: {
    mode: 'dark',
    common,
    background: {
      default: '#12111a',
      paper: '#26242d'
    },
    text: {
      primary: '#fff',
      disabled: 'gray',
      secondary: '#d0cfd1'
    },
    primary: {
      main: '#09090d',
      light: '#17171c'
    },
    secondary: {
      main: '#523fd7'
    }
  },
  components: { MuiButton: {} },

  typography: {
    fontFamily: poppins.style.fontFamily
  }
})

const themes = {
  light,
  dark
}

export default themes

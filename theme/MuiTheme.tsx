'use client'

import { CssBaseline, Slide, Box, GlobalStyles } from '@mui/material'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  getInitColorSchemeScript,
  experimental_extendTheme as extendTheme
} from '@mui/material/styles'

import EmotionCacheProvider from './EmotionCacheProvider'
import { css } from '@emotion/react'

import themes from './themes'

type MuiProviderProps = {
  children: React.ReactNode
}

export default function MuiProvider({ children }: MuiProviderProps) {
  const pathName = usePathname()

  const direction = useMemo(
    () => (pathName !== '/' ? 'left' : 'right'),
    [pathName]
  )

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const extendedTheme = extendTheme({
    colorSchemes: themes
  })
  getInitColorSchemeScript({
    defaultMode: 'dark',
    defaultDarkColorScheme: 'dark'
  })

  return (
    <EmotionCacheProvider
      options={{
        key: 'css'
      }}
    >
      <CssVarsProvider
        theme={extendedTheme}
        defaultMode='dark'
        defaultColorScheme='dark'
      >
        <CssBaseline />
        <GlobalStyles
          styles={css`
            :root {
              body {
                background-color: var(--mui-palette-background-default);
                color: #121212;
              }
            }
            [data-mui-color-scheme='dark'] {
              body {
                background-color: var(--mui-palette-background-default);
                color: #fff;
              }
            }
          `}
        />
        <Slide key={pathName} direction={direction} in={true} appear={mounted}>
          <Box>{children}</Box>
        </Slide>
      </CssVarsProvider>
    </EmotionCacheProvider>
  )
}

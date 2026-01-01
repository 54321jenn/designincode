import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import type { Theme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

type ThemeMode = 'light' | 'dark'

interface ThemeContextType {
  mode: ThemeMode
  theme: Theme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useThemeMode = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeProvider')
  }
  return context
}

const getSystemPreference = (): ThemeMode => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'dark'
}

const getInitialMode = (): ThemeMode => {
  // Use system preference
  return getSystemPreference()
}

const createAppTheme = (mode: ThemeMode): Theme => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#6366f1', // Indigo
      },
      secondary: {
        main: '#ec4899', // Pink
      },
      background: {
        default: mode === 'dark' ? '#0f172a' : '#ffffff',
        paper: mode === 'dark' ? '#1e293b' : '#f8f9fa',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: 600,
      },
    },
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: mode === 'dark' ? '#1e293b' : '#ffffff',
            borderRight: mode === 'dark' 
              ? '1px solid rgba(255, 255, 255, 0.08)' 
              : '1px solid rgba(0, 0, 0, 0.12)',
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            margin: '4px 8px',
            '&.Mui-selected': {
              backgroundColor: mode === 'dark' 
                ? 'rgba(99, 102, 241, 0.2)' 
                : 'rgba(99, 102, 241, 0.1)',
            },
          },
        },
      },
    },
  })
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode)
  const [theme, setTheme] = useState<Theme>(() => createAppTheme(mode))

  useEffect(() => {
    setTheme(createAppTheme(mode))
  }, [mode])

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      setMode(e.matches ? 'dark' : 'light')
    }

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    } 
    // Fallback for older browsers
    else if (mediaQuery.addListener) {
      // @ts-ignore - legacy API
      mediaQuery.addListener(handleChange)
      // @ts-ignore - legacy API
      return () => mediaQuery.removeListener(handleChange)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ mode, theme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}


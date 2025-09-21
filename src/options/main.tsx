import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import Options from './Options'
import theme from '../theme/theme'
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('split-soul-options-root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Options />
    </ThemeProvider>
  </StrictMode>
)

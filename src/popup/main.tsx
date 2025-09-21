import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../theme/theme'
import Popup from './Popup'
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('split-soul-popup-root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Popup />
    </ThemeProvider>
  </StrictMode>
)

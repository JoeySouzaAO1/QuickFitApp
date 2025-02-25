import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import theme from './theme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </CssBaseline>
  </StrictMode>,
)

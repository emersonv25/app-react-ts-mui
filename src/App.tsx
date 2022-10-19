import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import AlertPopup from './components/alerts/AlertPopup'
import { NavBar } from './components/navbar/NavBar'
import { AlertProvider } from './contexts/AlertContext'
import { AuthProvider } from './contexts/AuthContext'
import { AppThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <AlertProvider>
      <AuthProvider>
        <AppThemeProvider>
          <BrowserRouter>
            <NavBar>
              <AlertPopup />
              <AppRoutes />
            </NavBar>
          </BrowserRouter>
          <CssBaseline />
        </AppThemeProvider>
      </AuthProvider>
    </AlertProvider>

  )
}

export default App
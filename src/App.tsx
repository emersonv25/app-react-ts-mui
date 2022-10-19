import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import AlertPopup from './shared/components/alerts/AlertPopup'
import { NavBar } from './shared/components/navbar/NavBar'
import { AlertProvider } from './shared/contexts/AlertContext'
import { AuthProvider } from './shared/contexts/AuthContext'
import { AppThemeProvider } from './shared/contexts/ThemeContext'

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
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import InfoAlert from './shared/components/alerts/InfoAlert'
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
              <InfoAlert />
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
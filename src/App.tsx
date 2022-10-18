import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { NavBar } from './shared/components/navbar/NavBar'
import { AuthProvider } from './shared/contexts/AuthContext'
import { AppThemeProvider } from './shared/contexts/ThemeContext'

function App() {
  return (
    <AuthProvider>
      <AppThemeProvider>
        <BrowserRouter>
          <NavBar>
            <AppRoutes />
          </NavBar>
        </BrowserRouter>
        <CssBaseline />
      </AppThemeProvider>
    </AuthProvider>
  )
}

export default App
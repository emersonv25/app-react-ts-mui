import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { NavBar } from './shared/components/navbar'
import { AppThemeProvider } from './shared/contexts/ThemeContext'

function App() {

  return (
    <AppThemeProvider>
      <BrowserRouter>
        <NavBar>
           <AppRoutes />
        </NavBar>
      </BrowserRouter>
      <CssBaseline />
    </AppThemeProvider>
  )
}

export default App
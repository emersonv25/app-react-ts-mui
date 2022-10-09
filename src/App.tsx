import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { MenuAppBar } from './shared/components/menu'
import { AppThemeProvider } from './shared/contexts/ThemeContext'

function App() {

  return (
      <AppThemeProvider>
        <BrowserRouter>
          <MenuAppBar/>
          <AppRoutes/>
        </BrowserRouter>
        <CssBaseline/>
      </AppThemeProvider>
  )
}

export default App
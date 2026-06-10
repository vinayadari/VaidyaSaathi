import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import App from './App'
import { ThemeProvider } from './contexts/ThemeContext'
import { EmergencyProvider } from './contexts/EmergencyContext'
import './index.css'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <EmergencyProvider>
          <BrowserRouter>
            <App />
            <Toaster position="bottom-right" />
          </BrowserRouter>
        </EmergencyProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)

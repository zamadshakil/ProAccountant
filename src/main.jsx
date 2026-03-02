import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'))
const TermsOfService = lazy(() => import('./pages/TermsOfService.jsx'))

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-background-light">
    <div className="text-center">
      <div className="w-10 h-10 border-4 border-primary border-t-accent-gold rounded-full animate-spin mx-auto mb-4" />
      <p className="text-slate-500 text-sm">Loading...</p>
    </div>
  </div>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={
          <Suspense fallback={<Loading />}>
            <PrivacyPolicy />
          </Suspense>
        } />
        <Route path="/terms-of-service" element={
          <Suspense fallback={<Loading />}>
            <TermsOfService />
          </Suspense>
        } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

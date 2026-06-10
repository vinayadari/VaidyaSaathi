import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import DashboardPage from './pages/DashboardPage'
import SearchPage from './pages/SearchPage'
import PharmacyPage from './pages/PharmacyPage'
import MedicinePage from './pages/MedicinePage'
import AlternativesPage from './pages/AlternativesPage'
import MapPage from './pages/MapPage'
import AdminPage from './pages/AdminPage'
import AnalyticsPage from './pages/AnalyticsPage'
import ProfilePage from './pages/ProfilePage'
import HistoryPage from './pages/HistoryPage'
import NotificationsPage from './pages/NotificationsPage'
import SettingsPage from './pages/SettingsPage'
import EmergencyPage from './pages/EmergencyPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/" element={<DashboardLayout />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="pharmacy/:id" element={<PharmacyPage />} />
        <Route path="medicine/:id" element={<MedicinePage />} />
        <Route path="alternatives" element={<AlternativesPage />} />
        <Route path="map" element={<MapPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="emergency" element={<EmergencyPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/pharmacies" element={<Navigate to="/search" replace />} />
    </Routes>
  )
}

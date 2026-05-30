import { Routes, Route } from "react-router-dom"

import ProtectedRoute from "../src/routes/ProtectedRoute"

import DashboardLayout from "./components/layout/DashboardLayout"

import LandingPage from "./pages/Landing/LandingPage"

import Home from "./pages/Home/HomePage"
import Tasks from "./pages/Tasks/TasksPage"
import FocusMode from "./pages/FocusMode/FocusModePage"
import Insights from "./pages/Insights/InsightsPage"
import Notes from "./pages/Notes/NotesPage"
import Settings from "./pages/Settings/SettingsPage"

function App() {
  return (
    <Routes>

      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Dashboard (ALL PROTECTED) */}
      <Route element={<DashboardLayout />}>
        
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />

        <Route
          path="/focus"
          element={
            <ProtectedRoute>
              <FocusMode />
            </ProtectedRoute>
          }
        />

        <Route
          path="/insights"
          element={
            <ProtectedRoute>
              <Insights />
            </ProtectedRoute>
          }
        />

        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

      </Route>

    </Routes>
  )
}

export default App
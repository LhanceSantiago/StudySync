import { Routes, Route } from "react-router-dom"

import LandingPage from "./pages/Landing/LandingPage"

import DashboardLayout from "./components/layout/DashboardLayout"

import Home from "./pages/Home/HomePage"
import Tasks from "./pages/Tasks/TasksPage"
import FocusMode from "./pages/FocusMode/FocusModePage"
import Insights from "./pages/Insights/InsightsPage"
import Notes from "./pages/Notes/NotesPage"
import Settings from "./pages/Settings/SettingsPage"

function App() {
  return (
    <>
     <Routes>
      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Auth */}

      {/* Dashboard */}
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/focus" element={<FocusMode />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
    </>
  )
}

export default App

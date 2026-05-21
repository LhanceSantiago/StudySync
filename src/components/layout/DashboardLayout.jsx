import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

function DashboardLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <maine className="flex-1 p-4">
        <Outlet />
      </maine>
    </div>
  )
}

export default DashboardLayout
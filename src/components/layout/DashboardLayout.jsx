import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"

function DashboardLayout() {
  return (
    <div className="h-screen flex flex-col">
      {/* <Header /> */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
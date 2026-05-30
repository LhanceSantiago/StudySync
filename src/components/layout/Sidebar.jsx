import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { supabase } from "../../supabase/client"
import logo from "/logo.png"

import {
  House,
  StickyNote,
  Timer,
  ChartNoAxesCombined,
  Settings,
  BriefcaseBusiness,
  LogOut
} from "lucide-react"

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {

  const navigate = useNavigate()
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  function closeSidebar() {
      setIsSidebarOpen(false)
  }

  const navClass = ({ isActive }) =>
    `p-5 rounded-lg transition-all duration-500 flex items-center gap-3 text-xl font-bold 
     lg:p-3 lg:text-sm ${
      isActive
        ? "bg-primary text-white shadow-lg shadow-primary/50"
        : "bg-white text-primary hover:shadow-lg"
    }`
    // logout func
      const handleLogout = async () => {

    await supabase.auth.signOut()

    setShowLogoutModal(false)

    navigate("/")
  }

  return (

    <div
      className={`fixed top-0 h-full w-full p-4 flex flex-col gap-8 border-r border-gray bg-white transition-all duration-500 z-50 
        lg:static
      ${
        isSidebarOpen
          ? "left-0"
          : "left-[-50rem]"
      }

      lg:left-0 lg:w-64`}
    >

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <img
            src={logo}
            alt="logo"
            className="w-12"
          />

          <h2 className="text-xl text-primary font-semibold">
            StudySync
          </h2>

        </div>

        <div
          onClick={() => setIsSidebarOpen(false)}
          className="w-10 h-10 bg-secondary rounded-full cursor-pointer hover:bg-primary hover:w-9 hover:h-9 transition-all duration-500 lg:hidden"
        >
        </div>

      </div>

      <nav className="h-full flex flex-col gap-2 justify-between">

        <div className="flex flex-col gap-2">

          <NavLink className={navClass} to="/home" onClick={closeSidebar}>
            <House />
            Home
          </NavLink>

          <NavLink className={navClass} to="/tasks" onClick={closeSidebar}>
            <BriefcaseBusiness />
            Tasks
          </NavLink>

          <NavLink className={navClass} to="/focus" onClick={closeSidebar}>
            <Timer />
            Focus Mode
          </NavLink>

          <NavLink className={navClass} to="/insights" onClick={closeSidebar}> 
            <ChartNoAxesCombined />
            Insights
          </NavLink>

          <NavLink className={navClass} to="/notes" onClick={closeSidebar}>
            <StickyNote />
            Notes
          </NavLink>

        </div>

        <div className="border-t border-gray pt-5 flex flex-col gap-5">

          <NavLink className={navClass} to="/settings" onClick={closeSidebar}>
            <Settings />
            Settings
          </NavLink>

          <button className="btn btn-positive flex items-center justify-center gap-3" onClick={() => setShowLogoutModal(true)}>
            <LogOut />Log out
          </button>
        
        </div>

      </nav>

        {showLogoutModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 text-center">

          <div className="bg-light px-10 py-8 rounded-xl shadow-lg flex flex-col gap-6">

            <h3 className="text-lg font-bold text-primary">Confirm Logout</h3>

            <p className="text-sm text-gray-500">Are you sure you want to log out?</p>

            <div className="flex justify-center gap-3">

              {/* CANCEL BUTTON */}
              <button
                className="btn btn-positive"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>

              {/* CONFIRM LOGOUT */}
              <button
                className="btn btn-negative flex items-center justify-center gap-3"
                onClick={handleLogout}
              >
                <LogOut />Log out
              </button>

            </div>

          </div>

        </div>
      )}


    </div>
  )
}

export default Sidebar
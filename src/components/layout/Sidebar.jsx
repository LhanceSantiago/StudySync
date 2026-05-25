import { NavLink } from "react-router-dom"
import logo from "/logo.png"
import { House, StickyNote, Timer, ChartNoAxesCombined, Settings, BriefcaseBusiness } from "lucide-react"

function Sidebar() {

  const navClass = ({ isActive }) =>
    `p-3 rounded-lg transition-all duration-500 flex items-center gap-3 text-sm font-bold ${
      isActive
      ? "bg-primary text-white shadow-lg shadow-primary/50"
      : "bg-white text-primary hover:shadow-lg"
    }`

  return (
    // lagyan ng fixed left--100rem only on small at medium, hidden sa desktop
    <div className="w-64 border-r border-gray p-4 flex flex-col gap-5">  

      <div className="flex items-center gap-2">
       <img src={logo} alt="logo" className="w-12"/>
        <h2 className="text-xl text-primary font-semibold">
          StudySync
        </h2>
      </div>

      <nav className="h-full flex flex-col gap-2 justify-between">

        <div className="flex flex-col gap-2">
           <NavLink className={navClass} to="/">
            <House/>
              Home
            </NavLink>

            <NavLink className={navClass} to="/tasks">
            <BriefcaseBusiness />
              Tasks
            </NavLink>

            <NavLink className={navClass} to="/focus">
            <Timer />
              Focus Mode
            </NavLink>

            <NavLink className={navClass} to="/insights">
            <ChartNoAxesCombined />
              Insights
            </NavLink>

            <NavLink className={navClass} to="/notes">
            <StickyNote />
              Notes
            </NavLink>
        </div>

        <div className="border-t border-gray pt-5 ">
          <NavLink className={navClass} to="/settings">
          <Settings />
            Settings
          </NavLink>
        </div>
      
      </nav>

    </div>
  )
}

export default Sidebar
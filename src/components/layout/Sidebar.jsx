import { NavLink } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-64 h-full bg-white border-r">

      <div>
        <h2>StudySync</h2>
        {/* image here */}
      </div>

      <nav className="flex flex-col">
 
        <NavLink className="bg-lightPrimary hover:bg-primary transition-all" to="/tasks">Tasks</NavLink>
        <NavLink className="bg-lightPrimary hover:bg-primary transition-all" to="/focus">Focus Mode</NavLink>
        <NavLink className="bg-lightPrimary hover:bg-primary transition-all" to="/insights">Insights</NavLink>
        <NavLink className="bg-lightPrimary hover:bg-primary transition-all" to="/">Home</NavLink>
        <NavLink className="bg-lightPrimary hover:bg-primary transition-all" to="/notes">Notes</NavLink>
        <NavLink className="bg-lightPrimary hover:bg-primary transition-all" to="/settings">Settings</NavLink>
      </nav>

    </div>
  )
}

export default Sidebar
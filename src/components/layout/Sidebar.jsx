import { NavLink } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-64 h-full bg-white border-r p-4">

      <h1>StudySync</h1>

      <nav className="flex flex-col gap-2">

        <NavLink to="/">Home</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
        <NavLink to="/focus">Focus Mode</NavLink>
        <NavLink to="/insights">Insights</NavLink>
        <NavLink to="/notes">Notes</NavLink>
        <NavLink to="/settings">Settings</NavLink>

      </nav>

    </div>
  )
}

export default Sidebar
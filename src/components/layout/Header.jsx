import logo from "/logo.png"

function Header({ isSidebarOpen, setIsSidebarOpen }) {

  return (
    <section className="p-5 border-primary border-b-4 lg:hidden">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-12"/>
                <h2 className="text-2xl text-primary">StudySync</h2>
            </div>

          <div
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-9 h-9 bg-primary rounded-full cursor-pointer hover:bg-secondary hover:w-10 hover:h-10 transition-all duration-500"
          >
          </div>
        </div>
    </section>
  )
}

export default Header
import logo from "/logo.png"
function Header() {
  return (
    <section>
        <div className="container">
            <div> 
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="w-12"/>
                    <h2 className="text-2xl text-primary">StudySync</h2>
                </div>
            </div>
        </div>
    </section>
   
  )
}

export default Header
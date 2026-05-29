import Hero from "./Hero"
import Auth from "./Auth"

function LandingPage() {
  return (
    <section className="min-h-screen flex flex-col
    lg:flex-row ">
    <Hero/>
    <Auth/>
    </section>
  )
}

export default LandingPage
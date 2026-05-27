import { Link } from "react-router-dom"
import logoLight from "/logoLight.png"
import { Feature } from "framer-motion"
import { Calendar,
        Target,
        BookOpen,
        TrendingUp
 } from "lucide-react"

const features = [
  { icon: <Calendar color="#D45113" />, label: "PLAN" },
  { icon: <Target color="#D45113" />,   label: "FOCUS" },
  { icon: <BookOpen color="#D45113" />, label: "LEARN" },
  { icon: <TrendingUp color="#D45113" />, label: "IMPROVE" },
]

function LandingPage() {
  return (
    <>
    <section className="min-h-screen px-6 py-6 bg-primary">
      <div className="container mx-auto">
        <div>
            <div className="flex items-center gap-2">
                <img src={logoLight} alt="logoLight" className="w-12"/>
                <h2 className="text-2xl font-bold text-light">StudySync</h2>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-6 pt-25
            lg:pt-30">
                <h1 className="text-4xl font-bold text-light leading-snug">Your Study Life, Perfectly in Sync.</h1>
                <p className="text-lg text-light">Designed to help you stay organized, focused, and always one step ahead.</p>
               <ul className="text-light grid gap-2 justify-items-center grid-cols-2 lg:grid-cols-4">
                {features.map(({ icon, label }) => (
                <li key={label} className="flex gap-2 px-3 py-1 border rounded-3xl border-light bg-lightPrimary">
                  {icon}
                  {label}
                </li>
                ))}
              </ul>

                <div className="flex gap-6">
                    <Link to="/signup" className="btn tertiary">Get Started</Link>
                    <Link to="/login" className="btn secondary">Login</Link>
                </div>
            </div>
        </div>
      </div>
    </section>
    </>
    
  )
}

export default LandingPage
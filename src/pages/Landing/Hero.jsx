import { Link } from "react-router-dom"
import logoLight from "/logoLight.png"

import { Calendar,
        Target,
        BookOpen,
        TrendingUp,
        ArrowDown
 } from "lucide-react"

const features = [
  { icon: <Calendar color="#D45113" />, label: "PLAN" },
  { icon: <Target color="#D45113" />,   label: "FOCUS" },
  { icon: <BookOpen color="#D45113" />, label: "LEARN" },
  { icon: <TrendingUp color="#D45113" />, label: "IMPROVE" },
]

function Hero() {
  return (
     <div className="bg-primary p-6 flex-1 min-h-screen flex flex-col justify-center items-center gap-6
     lg:min-h-0 ">
        <div className="flex items-center gap-2">
            <img src={logoLight} alt="logoLight" className="w-12
            lg:w-16"/>
            <h2 className="text-2xl font-bold text-light
            lg:text-5xl">StudySync</h2>
        </div>
         
        <div className="flex flex-col justify-center items-center text-center gap-6">
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

            <a href="#auth" className="lg:hidden">
                <ArrowDown size={45} color="#D45113" strokeWidth={1}  className="cursor-pointer hover:translate-y-2 transition-all duration-300"/>
            </a>
            
        </div>
    </div>
  )
}

export default Hero
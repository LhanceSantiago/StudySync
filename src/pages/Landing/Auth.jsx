import { useState } from "react"
import logo from "/logo.png"
import { FcGoogle } from "react-icons/fc"
import { supabase } from "../../supabase/client"
import { useNavigate } from "react-router-dom"



function Auth() {

  const [isLogin, setIsLogin] = useState(true)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const navigate = useNavigate()

  // ✔ SIGN UP (logic only)
  const handleSignUp = async (e) => {
    e.preventDefault()
    if (loading) return

    setLoading(true)
    setMessage("")

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage("Account created successfully!")
    }

    setLoading(false)
  }

  // ✔ LOGIN (logic only)
  const handleLogin = async (e) => {
  e.preventDefault()

  setLoading(true)

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    setMessage(error.message)
  } else {
    setMessage("Login successful!")

    navigate("/home")
  }

  setLoading(false)
}

  // ✔ GOOGLE LOGIN (logic only)
  const handleGoogle = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/home`
    }
  })
}

  return (

    <section id="auth" className="flex-1 min-h-screen flex items-center justify-center bg-lightPrimary 
    lg:min-h-0 ">

      <div className="bg-light rounded-3xl p-8 shadow-lg flex flex-col gap-6">

        {/* LOGO (UNCHANGED) */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logoLight" className="w-12"/>
          <h2 className="text-2xl font-bold text-primary">StudySync</h2>
        </div>

        <div className="flex bg-light rounded-xl py-3 gap-2">

          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 cursor-pointer ${
              isLogin ? "btn btn-primary" : "btn btn-secondary"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 cursor-pointer ${
              !isLogin ? "btn btn-primary" : "btn btn-secondary"
            }`}
          >
            Sign Up
          </button>

        </div>

        {/* TEXT (UNCHANGED) */}
        <div className="text-center">

          <h2 className="text-3xl font-bold text-primary">
            {isLogin ? "Welcome Back!" : "Create Account"}
          </h2>

          <p className="text-gray-500 mt-2">
            {isLogin
              ? "Login to continue your study journey."
              : "Start organizing your study life today."
            }
          </p>

        </div>

        {/* FORM (STYLE NOT CHANGED) */}
        <form className="flex flex-col gap-4">

          {/* Username (UI only for now) */}
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              className="border border-gray rounded-xl p-3 outline-none focus:border-primary"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="border border-gray rounded-xl p-3 outline-none focus:border-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border border-gray rounded-xl p-3 outline-none focus:border-primary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={isLogin ? handleLogin : handleSignUp}
            className="bg-primary text-white rounded-xl p-3 font-semibold hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            {loading ? "Processing..." : isLogin ? "Login" : "Create Account"}
          </button>

        </form>

        {/* MESSAGE */}
        {message && (
          <p className="text-center text-sm text-gray-600">
            {message}
          </p>
        )}

        {/* DIVIDER (UNCHANGED) */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray"></div>
          <p className="text-sm text-gray">OR</p>
          <div className="flex-1 h-px bg-gray"></div>
        </div>

        {/* GOOGLE BUTTON (UNCHANGED STYLE) */}
        <button
          onClick={handleGoogle}
          className="flex items-center border justify-center gap-2 border-gray rounded-xl p-3 font-semibold bg-light hover:bg-primary hover:border-primary hover:text-light cursor-pointer transition-all duration-300"
        >
          <FcGoogle />
          Continue with Google
        </button>

      </div>

    </section>
  )
}

export default Auth
import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col justify-between">
        <Navbar/>
        <main className="min-h-[80vh] py-10">
            { children }
        </main>
        <Footer/>
    </div>
  )
}

export default Layout
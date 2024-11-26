import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import useStore from "../../store/store";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const sectionVisibility = useStore((state) => state.sectionVisibility);

  return (
    <div className="h-screen flex flex-col justify-between">
      {sectionVisibility && <div className="fixed top-0 left-0 z-40 bg-black bg-opacity-20 w-full h-full"></div>}
        <Navbar/>
        <main className="min-h-[80vh] py-10">
            { children }
        </main>
        <Footer/>
    </div>
  )
}

export default Layout
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./component/ui/Navbar";
import Footer from "./component/ui/Footer";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import axios from 'axios'
import { toast } from "react-toastify";
import Upload from "./pages/Upload";

function App() {


  let [user, setUser] = useState({})

  useEffect(() => {
    let reloadUser = async () => {
      let myRole = localStorage.getItem('role')
      let myToken = localStorage.getItem('token')
      if (myRole) {
        try {
          let response = await axios.get(`https:/mern71-sist.onrender.com/auth/${myRole}/profile`, {
            headers: {
              Authorization: myToken
            }
          })
          if (response.data.success) {
            setUser(response.data.user)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('role', response.data.user.role)
          }
        } catch (error) {
          toast.error(error.response.data.message)
        }

      } else {
        setUser({})
      }
    }

    reloadUser()
  }, [])



  return (
    <div>
      <Navbar setUser={setUser} user={user} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} user={user} />} />
        <Route path="/register" element={<Register />} />

        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
      </Routes>

      <Footer />
    </div>


  )
}

export default App

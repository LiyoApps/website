import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Home'
import Services from './Services'
import Contact from './Contact'
import About from './About'
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import {ThemeProvider} from 'styled-components'
import { GlobalStyle } from './GlobalStyle'
import Error from './Error'
import GoToTop from './components/GoToTop'

function App() {
const theme={
  colors: {
    heading: "rgb(217, 58, 18)",
    text: "rgb(24 24 29)",
    white: "#fff",
    black: " #212529",
    helper: "#c10e85",
    bg: "#D2B48C",
    bcg:"#fff",
    footer_bg: "#0a1435",
    btn: "rgb(217, 58, 18)",
    border: "rgba(98, 84, 243, 0.5)",
    hr: "#ffffff",
    gradient:
      "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  media: { mobile: "768px", tab: "998px" },
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <GoToTop />
   <BrowserRouter>
   <Header />
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/services" element={<Services />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/about" element={<About />} />
   <Route path="*" element={<Error />} />
   </Routes>
   <Footer />
   </BrowserRouter>
   </ThemeProvider>
   </>

  )
}

export default App

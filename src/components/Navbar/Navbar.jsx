import React, { useEffect, useState } from 'react'
import "./navbar.css"
export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY>70 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <nav className={`navbar ${sticky? 'green-nav':''}`}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Tips</a></li>
        <li><a href="#">Adventures</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

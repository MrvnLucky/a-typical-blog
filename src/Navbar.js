import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>A-Typical Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New blog</a>
      </div>
    </nav>
  )
}

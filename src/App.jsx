import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')

  return (
    <div className="app-container">
      <div className="card-container">
        {/* Badge */}
        <span className="badge">UI Demo</span>

        {/* Title */}
        <h1 className="title">Vite + React</h1>

        {/* Subtitle */}
        <p className="subtitle">
          Modern UI development with React 🚀
        </p>

        {/* Feature List */}
        <ul className="feature-list">
          <li>✅ Fast development</li>
          <li>🎨 Responsive design</li>
          <li>⚡️ Hot Module Replacement</li>
        </ul>

        {/* Input */}
        <input
          type="text"
          placeholder="Enter your name"
          className="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Buttons */}
        <div className="button-group">
          <button className="btn btn-primary">Login</button>
          <button className="btn btn-outline">Register</button>
        </div>

        {/* Footer */}
        <p className="footer-text">
          Built with Vite + React 💙
        </p>
      </div>
    </div>
  )
}

export default App
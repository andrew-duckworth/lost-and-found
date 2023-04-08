import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Login from './Login'
import Home from './Home'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { EditNote } from './EditNotes'

function App() {
  return (
    <div className="container has-text-centered">
      <Header />
      <div>
        {/* <IfNotAuthenticated>
          <Login />
        </IfNotAuthenticated>

        <IfAuthenticated>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes/:id" element={<EditNote />} />
          </Routes>
        </IfAuthenticated> */}
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes/:id" element={<EditNote />} />
          </Routes>
      </div>
    </div>
  )
}

export default App

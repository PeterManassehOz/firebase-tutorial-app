import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Main } from './pages/home/home'
import { Login } from './pages/login'
import { Navbar } from './components/navbar'
import { CreatePost } from './pages/create-posts/create-post'


function App() {

  return (
      <div>
       <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createpost' element={<CreatePost />} />
        </Routes>
       </Router>
      </div>
  )
}

export default App


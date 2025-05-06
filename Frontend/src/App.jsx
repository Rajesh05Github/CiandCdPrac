import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen">
      <nav className='w-full bg-gray-400 py-4'>
         <ul className='flex justify-center gap-4 text-white text-bold'>
          <li><Link to="/creatUser">Create</Link></li>
          <li><Link to="/user-list">Users</Link></li>
          <li><Link>About ME</Link></li>
         </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default App

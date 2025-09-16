import './App.css'
import './index.css'
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/dashboard' element={<Dashboard />} />
   </Routes>
  )
}
export default App

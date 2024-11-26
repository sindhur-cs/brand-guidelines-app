import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import App from '../../App.tsx'
import Collections from '../pages/Collections.tsx'
import BrandGuidelines from '../pages/BrandGuidelines.tsx'
const RouteProvider = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/brand-guidelines" element={<BrandGuidelines/>}/>
          <Route path="/collections" element={<Collections/>}/>
      </Routes>
    </Router>
  )
}

export default RouteProvider
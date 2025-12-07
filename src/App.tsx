import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import GettingStarted from './pages/GettingStarted'
import Tutorials from './pages/Tutorials'
import Components from './pages/Components'
import DesignPrinciples from './pages/DesignPrinciples'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="getting-started" element={<GettingStarted />} />
        <Route path="tutorials" element={<Tutorials />} />
        <Route path="components" element={<Components />} />
        <Route path="design-principles" element={<DesignPrinciples />} />
      </Route>
    </Routes>
  )
}

export default App

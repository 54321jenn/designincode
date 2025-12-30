import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tutorials from './pages/Tutorials'
import Components from './pages/Components'
import DesignPrinciples from './pages/DesignPrinciples'

import EditorSetup from './pages/getting-started/EditorSetup'
import Assistants from './pages/getting-started/Assistants'
import GitSetup from './pages/getting-started/GitSetup'
import Toolchain from './pages/getting-started/Toolchain'
import MuiSetup from './pages/getting-started/MuiSetup'
import FirstApp from './pages/getting-started/FirstApp'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tutorials" element={<Tutorials />} />
        <Route path="components" element={<Components />} />
        <Route path="design-principles" element={<DesignPrinciples />} />

        <Route path="getting-started">
          <Route index element={<Navigate to="editor" replace />} />
          <Route path="editor" element={<EditorSetup />} />
          <Route path="assistants" element={<Assistants />} />
          <Route path="git" element={<GitSetup />} />
          <Route path="toolchain" element={<Toolchain />} />
          <Route path="mui" element={<MuiSetup />} />
          <Route path="first-app" element={<FirstApp />} />
        </Route>

        <Route path="*" element={<div style={{ padding: 24 }}>Coming soon</div>} />
      </Route>
    </Routes>
  )
}

export default App
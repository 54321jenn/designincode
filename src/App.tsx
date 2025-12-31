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
import QuickstartVite from './pages/getting-started/QuickstartVite'
import MuiSetup from './pages/getting-started/MuiSetup'
import CommandLine from './pages/tutorials/CommandLine'
import MpcServers from './pages/tutorials/MpcServers'
import VercelPublishing from './pages/tutorials/VercelPublishing'
import SetupPython from './pages/tutorials/SetupPython'
import HelloWorldStreamlit from './pages/tutorials/HelloWorldStreamlit'
import PullRequests from './pages/tutorials/PullRequests'
import CloneRepo from './pages/tutorials/CloneRepo'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tutorials" element={<Tutorials />} />
        <Route path="tutorials/command-line" element={<CommandLine />} />
        <Route path="tutorials/clone-repo" element={<CloneRepo />} />
        <Route path="tutorials/pull-requests" element={<PullRequests />} />
        <Route path="tutorials/mpc-servers" element={<MpcServers />} />
        <Route path="tutorials/vercel-publishing" element={<VercelPublishing />} />
        <Route path="tutorials/setup-python" element={<SetupPython />} />
        <Route path="tutorials/hello-world-streamlit" element={<HelloWorldStreamlit />} />
        <Route path="components" element={<Components />} />
        <Route path="design-principles" element={<DesignPrinciples />} />

        <Route path="getting-started">
          <Route index element={<Navigate to="editor" replace />} />
          <Route path="editor" element={<EditorSetup />} />
          <Route path="assistants" element={<Assistants />} />
          <Route path="git" element={<GitSetup />} />
          <Route path="toolchain" element={<Toolchain />} />
          <Route path="quickstart-vite" element={<QuickstartVite />} />
          <Route path="mui" element={<MuiSetup />} />
        </Route>

        <Route path="*" element={<div style={{ padding: 24 }}>Coming soon</div>} />
      </Route>
    </Routes>
  )
}

export default App
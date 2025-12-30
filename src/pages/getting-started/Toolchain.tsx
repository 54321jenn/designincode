import { Paper, Typography } from '@mui/material'
import GettingStartedLayout, { CodeBlock } from './_GettingStartedLayout'

export default function Toolchain() {
  return (
    <GettingStartedLayout
      title="Toolchain"
      subtitle="Install Node, then scaffold a React + TypeScript app with Vite."
    >
      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Node.js
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Install Node 18+ (or 20+) using your preferred method. Then confirm versions.
        </Typography>
      </Paper>

      <CodeBlock
        label="Verify"
        code={`node -v
npm -v`}
      />

      <CodeBlock
        label="Create the app"
        code={`npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev`}
      />
    </GettingStartedLayout>
  )
}
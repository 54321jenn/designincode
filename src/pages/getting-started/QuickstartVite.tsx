import { Paper, Typography, Divider, Box, Link, Alert } from '@mui/material'
import GettingStartedLayout, { CodeBlock } from './_GettingStartedLayout'

export default function QuickstartVite() {
  return (
    <GettingStartedLayout
      title="Quickstart with Vite"
      subtitle="Create your first React application using Vite"
    >
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          What is Vite?
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Vite is a modern build tool that provides a fast development experience for React and other frameworks.
          It offers instant server start, lightning-fast hot module replacement (HMR), and optimized production builds.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Vite is the recommended way to create new React applications because it's faster and more efficient than
          traditional build tools, giving you a better development experience.
        </Typography>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Create the app
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Use Vite to create a new React application with TypeScript support.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <CodeBlock
            code={`npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev`}
          />
        </Box>
      </Paper>

      <Paper sx={{ p: 2, mt: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Preview your app
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          After running <code>npm run dev</code>, Vite will start a development server. Open your browser and navigate to{' '}
          <Link href="http://localhost:5173" target="_blank" rel="noopener noreferrer" sx={{ fontFamily: 'monospace' }}>
            http://localhost:5173
          </Link>{' '}
          to see your React application running.
        </Typography>
        <Alert severity="warning" sx={{ mt: 2 }}>
          <Typography variant="body2">
            <strong>Important:</strong> Check your terminal output to get the exact port number. Vite may use a different port if 5173 is already in use.
          </Typography>
        </Alert>
      </Paper>
    </GettingStartedLayout>
  )
}


import { Box, Typography, Paper, Stack, Alert } from '@mui/material'
import { Terminal, Lightbulb } from '@mui/icons-material'
import { useThemeMode } from '../contexts/ThemeContext'

const codeBlock = `npm create vite@latest my-app -- --template react-ts
cd my-app
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material @fontsource/roboto
npm run dev`

export default function GettingStarted() {
  const { mode } = useThemeMode()
  const codeBgColor = mode === 'dark' ? '#0d1117' : '#f6f8fa'
  const codeTextColor = mode === 'dark' ? '#e6edf3' : '#24292f'

  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Getting Started
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Set up your development environment and create your first project.
      </Typography>

      <Stack spacing={4}>
        <Alert icon={<Lightbulb />} severity="info">
          This guide assumes you have Node.js 18+ installed on your machine.
        </Alert>

        <Box>
          <Typography variant="h5" gutterBottom>
            1. Create a New Project
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            We'll use Vite to create a new React + TypeScript project, then add Material UI.
          </Typography>
          <Paper
            sx={{
              p: 2,
              bgcolor: codeBgColor,
              borderRadius: 2,
              fontFamily: 'monospace',
              overflow: 'auto',
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
              <Terminal fontSize="small" />
              <Typography variant="caption" color="text.secondary">
                Terminal
              </Typography>
            </Stack>
            <pre style={{ margin: 0, color: codeTextColor }}>
              {codeBlock}
            </pre>
          </Paper>
        </Box>

        <Box>
          <Typography variant="h5" gutterBottom>
            2. Project Structure
          </Typography>
          <Typography variant="body1" color="text.secondary">
            After setup, your project will have this structure:
          </Typography>
          <Paper sx={{ p: 2, mt: 2, bgcolor: 'background.paper' }}>
            <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.875rem' }}>
{`my-app/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components
│   ├── theme.ts       # MUI theme configuration
│   ├── App.tsx        # Main app component
│   └── main.tsx       # Entry point
├── public/
└── package.json`}
            </pre>
          </Paper>
        </Box>

        <Box>
          <Typography variant="h5" gutterBottom>
            3. Next Steps
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Now that you have your project set up, head over to the Tutorials section to start 
            building your first components!
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}


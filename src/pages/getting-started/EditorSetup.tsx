import { Button, Paper, Typography, Stack, Divider, Link, Alert, Box } from '@mui/material'
import GettingStartedLayout, { CodeBlock } from './_GettingStartedLayout'
import { Download, Lightbulb } from '@mui/icons-material'

export default function EditorSetup() {
  return (
    <GettingStartedLayout
      title="Editor Setup"
      subtitle="Get started by installing either Cursor or VS Code"
    >
      <Box
        sx={{
          width: '100%',
          mb: 3,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <img
          src="/hero.png"
          alt="Editor Setup Hero"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </Box>

      <Alert icon={<Lightbulb />} severity="info" sx={{ mb: 3 }}>
        Cursor and VS Code are powerful code editors with extensive plugin support to help make writing code really simple.
      </Alert>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Option 1: Install Cursor (Recommended)
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Cursor is an AI-powered code editor built on VS Code. It provides advanced AI assistance
          for coding and is perfect for modern development workflows.
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems={{ sm: 'center' }}
          sx={{ mb: 2 }}
        >
          <Button
            variant="contained"
            startIcon={<Download />}
            href="https://cursor.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Cursor
          </Button>
          <Typography variant="body2" color="text.secondary">
            Visit{' '}
            <Link href="https://cursor.sh/" target="_blank" rel="noopener noreferrer">
              cursor.sh
            </Link>{' '}
            to download for your operating system
          </Typography>
        </Stack>
        <CodeBlock
          label="After installing Cursor"
          code={`1. Open Cursor
2. Open the integrated terminal:
   View → Terminal (or Cmd/Ctrl + \`)`}
        />
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Option 2: Install VS Code (Alternative)
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Visual Studio Code is a lightweight, powerful code editor with extensive extension support.
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems={{ sm: 'center' }}
          sx={{ mb: 2 }}
        >
          <Button
            variant="outlined"
            startIcon={<Download />}
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download VS Code
          </Button>
          <Typography variant="body2" color="text.secondary">
            Already installed? Open it now. We'll use the integrated terminal.
          </Typography>
        </Stack>
        <CodeBlock
          label="After installing VS Code"
          code={`1. Open VS Code
2. Open the integrated terminal:
   View → Terminal (or Cmd/Ctrl + \`)`}
        />
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Recommended extensions (optional)
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li><strong>ESLint</strong></li>
            <li><strong>Prettier</strong></li>
            <li><strong>Material Icon Theme</strong> (nice)</li>
          </ul>
        </Typography>
      </Paper>
    </GettingStartedLayout>
  )
}
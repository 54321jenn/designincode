import { Button, Paper, Typography, Stack, Divider, Link, Alert, Box } from '@mui/material'
import GettingStartedLayout from './_GettingStartedLayout'
import { Download, Lightbulb, Widgets } from '@mui/icons-material'

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
            maxHeight: '300px',
            height: 'auto',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Box>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          What is a Code Editor?
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          A code editor is a specialized text editor designed for writing and editing code. Unlike a regular word
          processor, code editors understand programming languages and provide features like:
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>
              <strong>Syntax highlighting:</strong> Colors code to make it easier to read and spot errors
            </li>
            <li>
              <strong>Auto-completion:</strong> Suggests code as you type to speed up writing
            </li>
            <li>
              <strong>Error detection:</strong> Highlights mistakes before you run your code
            </li>
            <li>
              <strong>File navigation:</strong> Easily browse and open files in your project
            </li>
            <li>
              <strong>Integrated terminal:</strong> Run commands without leaving the editor
            </li>
            <li>
              <strong>Extensions:</strong> Add features like AI assistants, themes, and language support
            </li>
          </ul>
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Think of it like a word processor, but specifically designed for code. It makes writing, reading, and debugging
          code much easier than using a basic text editor.
        </Typography>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Option 1: Install Cursor (Recommended)
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Cursor is an AI-powered code editor built on VS Code. It provides advanced AI assistance
          for coding and is perfect for modern development workflows.
        </Typography>
        <Alert icon={<Lightbulb />} severity="info" sx={{ mb: 2 }}>
          Cursor offers a free tier with AI assistance included. There's also a paid tier available for additional AI
          features and higher usage limits beyond what the free tier provides.
        </Alert>
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
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Option 2: Install VS Code (Alternative)
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Visual Studio Code is a lightweight, powerful code editor with extensive extension support.
        </Typography>
        <Alert icon={<Lightbulb />} severity="info" sx={{ mb: 2 }}>
          VS Code is completely free and open source, with no paid tiers or subscriptions required.
        </Alert>
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
            Visit{' '}
            <Link href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">
              visualstudio.com
            </Link>{' '}
            to download for your operating system
          </Typography>
        </Stack>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
          <Widgets fontSize="small" color="action" />
          <Typography variant="subtitle1">
            Recommended extensions (optional)
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary" component="div">
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li><strong>ESLint</strong> - Helps find and fix code errors</li>
            <li><strong>Prettier</strong> - Automatically formats your code</li>
            <li><strong>Material Icon Theme</strong> - Nice file and folder icons</li>
          </ul>
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          <strong>How to install extensions:</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div" sx={{ mt: 1 }}>
          <ol style={{ margin: 0, paddingLeft: 18 }}>
            <li>Open the Extensions view: Click the Extensions icon in the sidebar (looks like four squares) or press{' '}
              <code
                style={{
                  background: '#e0e0e0',
                  color: '#000',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  fontFamily: 'monospace',
                  fontSize: '0.9em',
                  fontWeight: 600,
                  border: '1px solid #b0b0b0',
                }}
              >
                Cmd/Ctrl + Shift + X
              </code>
            </li>
            <li>Search for the extension name (e.g., "ESLint")</li>
            <li>Click the "Install" button next to the extension</li>
            <li>Repeat for each extension you want</li>
          </ol>
        </Typography>
      </Paper>
    </GettingStartedLayout>
  )
}
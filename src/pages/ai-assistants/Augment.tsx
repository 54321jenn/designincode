import { Paper, Typography, Alert, Box, Button, Stack, Link } from '@mui/material'
import GettingStartedLayout from '../getting-started/_GettingStartedLayout'
import { Lightbulb, School, OpenInNew } from '@mui/icons-material'

export default function Augment() {
  return (
    <GettingStartedLayout
      title="Augment"
      subtitle="An AI assistant extension for VS Code or Cursor. Adds powerful features like code navigation and refactoring help."
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
          src="/assistant.png"
          alt="Augment AI Assistant"
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
          What is Augment?
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Augment is an AI assistant extension that you can add to either <strong>VS Code</strong> or{' '}
          <strong>Cursor</strong>. It provides additional AI-powered features like:
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>
              <strong>Code navigation:</strong> Quickly find and understand how different parts of your code connect
            </li>
            <li>
              <strong>Refactoring help:</strong> Get suggestions for reorganizing and improving your code structure
            </li>
            <li>
              <strong>Enhanced AI chat:</strong> Additional AI capabilities beyond what's built into Cursor
            </li>
          </ul>
        </Typography>
        <Alert icon={<Lightbulb />} severity="info" sx={{ mt: 2 }}>
          Augment offers a free tier with AI assistance included. There's also a paid tier available for additional AI
          features and higher usage limits beyond what the free tier provides.
        </Alert>
      </Paper>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Install Augment in VS Code (Recommended)
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          If you're using VS Code and want AI assistance, Augment is a great option:
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <ol style={{ margin: 0, paddingLeft: 18 }}>
            <li>
              Click this link to open the VS Code Marketplace page for Augment:{' '}
              <Link href="vscode:extension/augmentcode.augment" target="_blank" rel="noopener noreferrer" sx={{ fontFamily: 'monospace' }}>
                vscode:extension/augmentcode.augment
              </Link>
            </li>
            <li>Press Install in the Extensions view once it opens.</li>
            <li>
              After installation, open the Augment panel inside the editor using:{' '}
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
                Cmd/Ctrl + Shift + A
              </code>
            </li>
          </ol>
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Install Augment in Cursor (Optional)
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          <strong>Note:</strong> If you're using Cursor, the built-in AI assistant is usually sufficient. Augment is
          most useful if you want extra features beyond what Cursor offers.
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <ol style={{ margin: 0, paddingLeft: 18 }}>
            <li>
              Click to open the Extensions marketplace page for Augment inside Cursor:{' '}
              <Link href="cursor:extension/Augment.vscode-augment" target="_blank" rel="noopener noreferrer" sx={{ fontFamily: 'monospace' }}>
                cursor:extension/Augment.vscode-augment
              </Link>
            </li>
            <li>Hit Install in the Extensions view.</li>
            <li>
              Once installed, activate Augment's panel with:{' '}
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
                Cmd/Ctrl + Shift + A
              </code>
            </li>
          </ol>
        </Typography>
        <Paper sx={{ p: 2, mt: 2, bgcolor: 'primary.dark', color: 'primary.contrastText' }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <School sx={{ fontSize: 32 }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                Want to deep dive into Augment's features?
              </Typography>
              <Button
                variant="contained"
                href="https://docs.augmentcode.com/quickstart"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                endIcon={<OpenInNew />}
                sx={{ bgcolor: 'primary.contrastText', color: 'primary.dark', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}
              >
                Learn More
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Paper>
    </GettingStartedLayout>
  )
}


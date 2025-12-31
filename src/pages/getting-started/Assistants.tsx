import { Paper, Typography, Divider, Alert, Box, Button, Stack, Link } from '@mui/material'
import GettingStartedLayout from './_GettingStartedLayout'
import { Lightbulb, School, OpenInNew } from '@mui/icons-material'

export default function Assistants() {
  return (
    <GettingStartedLayout
      title="AI Assistants"
      subtitle="Accelerate your coding workflow with AI-powered assistance that writes code, explains concepts, and helps you learn faster"
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
          alt="AI Assistants Hero"
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
          What is an AI Assistant?
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          An AI assistant is like having a coding tutor by your side. It's a tool powered by artificial intelligence that
          helps you write, understand, and improve code. Instead of searching through documentation or asking on forums,
          you can ask the AI directly and get instant help.
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>
              <strong>Write code for you:</strong> Describe what you want to build, and the AI generates the code
            </li>
            <li>
              <strong>Explain code:</strong> Ask questions about any code snippet and get clear explanations in plain
              English
            </li>
            <li>
              <strong>Fix errors:</strong> When something breaks, the AI can help identify and fix the problem
            </li>
            <li>
              <strong>Suggest improvements:</strong> Get recommendations to make your code better, faster, and more
              efficient
            </li>
            <li>
              <strong>Answer questions:</strong> Ask anything about coding concepts, syntax, or best practices
            </li>
            <li>
              <strong>Learn as you code:</strong> Get explanations while you work, making it easier to understand what
              you're building
            </li>
          </ul>
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          AI assistants make learning to code much easier and faster, especially for beginners. They're like having an
          experienced developer available 24/7 to help you learn and build.
        </Typography>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Option 1: Cursor (Recommended)
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Cursor is a code editor with AI assistance built right in. If you installed Cursor in the previous step,
          you're all set! The AI assistant is already built in and ready to use.
        </Typography>

        <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
          How to Use Cursor's AI Assistant
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Using Cursor's AI is simple! Here's how to get started:
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <ol style={{ margin: 0, paddingLeft: 18 }}>
            <li>
              <strong>Open the AI Chat:</strong> Press{' '}
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
                Cmd+L
              </code>{' '}
              (Mac) or{' '}
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
                Ctrl+L
              </code>{' '}
              (Windows/Linux), or click the chat icon in the sidebar
            </li>
            <li>
              <strong>Ask a question or request code:</strong> Type what you need, like "How do I create a button?" or
              "Write a function that adds two numbers"
            </li>
            <li>
              <strong>Get instant help:</strong> The AI will respond with code, explanations, or suggestions
            </li>
            <li>
              <strong>Accept suggestions:</strong> When the AI suggests code, press{' '}
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
                Tab
              </code>{' '}
              to accept, or click the suggestion
            </li>
          </ol>
        </Typography>
        <Alert icon={<Lightbulb />} severity="info" sx={{ mt: 3 }}>
          Cursor offers a free tier with AI assistance included. There's also a paid tier available for additional AI
          features and higher usage limits beyond what the free tier provides.
        </Alert>
        <Paper sx={{ p: 2, mt: 2, bgcolor: 'primary.dark', color: 'primary.contrastText' }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <School sx={{ fontSize: 32 }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                Want to deep dive into Cursor's features?
              </Typography>
              <Button
                variant="contained"
                href="https://cursor.com/docs/get-started/quickstart"
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

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Option 2: Augment (Optional Addon)
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

        <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
          Install Augment in VS Code (Recommended)
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

        <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
          Install Augment in Cursor (Optional)
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          <strong>Note:</strong> If you're using Cursor, the built-in AI assistant is usually sufficient. Augment is
          most useful if you're using VS Code and want AI assistance, or if you want extra features in Cursor.
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
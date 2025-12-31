import { Paper, Typography, Alert, Box, Button, Stack } from '@mui/material'
import GettingStartedLayout from '../getting-started/_GettingStartedLayout'
import { Lightbulb, School, OpenInNew } from '@mui/icons-material'

export default function Cursor() {
  return (
    <GettingStartedLayout
      title="Cursor"
      subtitle="A code editor with AI assistance built right in. Perfect for beginners and experienced developers alike."
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
          alt="Cursor AI Assistant"
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
          What is Cursor?
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Cursor is a code editor with AI assistance built right in. If you installed Cursor in the Editor Setup step,
          you're all set! The AI assistant is already built in and ready to use.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Cursor combines the power of a modern code editor with an AI assistant that understands your codebase, helping you write, debug, and understand code faster than ever before.
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
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
    </GettingStartedLayout>
  )
}


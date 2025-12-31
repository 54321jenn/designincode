import { Paper, Typography, Divider, Alert, Box } from '@mui/material'
import GettingStartedLayout from './_GettingStartedLayout'
import { AutoFixHigh as AutoFixHighIcon } from '@mui/icons-material'

export default function Assistants() {
  return (
    <GettingStartedLayout
      title="AI Assistants"
      subtitle="AI assistants help you write code faster by suggesting code, explaining errors, and answering questions"
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
      <Alert icon={<AutoFixHighIcon />} severity="info" sx={{ mb: 3 }}>
        AI coding assistants are like having a coding tutor by your side. They can help you write code, fix errors,
        explain how things work, and suggest improvements—making learning to code much easier and faster.
      </Alert>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Option 1: Cursor (Recommended)
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Cursor is a code editor with AI assistance built right in. It's perfect for beginners because it can:
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>
              <strong>Write code for you:</strong> Describe what you want to build, and Cursor will generate the code
            </li>
            <li>
              <strong>Explain code:</strong> Ask questions about any code, and get clear explanations in plain English
            </li>
            <li>
              <strong>Fix errors:</strong> When something breaks, Cursor can help identify and fix the problem
            </li>
            <li>
              <strong>Suggest improvements:</strong> Get recommendations to make your code better and more efficient
            </li>
            <li>
              <strong>Answer questions:</strong> Ask anything about coding concepts, and get instant help
            </li>
          </ul>
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          If you installed Cursor in the previous step, you're all set! The AI assistant is already built in and ready
          to use.
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
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          <strong>Note:</strong> If you're using Cursor, the built-in AI assistant is usually sufficient. Augment is
          most useful if you're using VS Code and want AI assistance, or if you want extra features in Cursor.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          To install Augment: Open your editor's extension marketplace, search for "Augment", install it, and sign in.
        </Typography>
      </Paper>
    </GettingStartedLayout>
  )
}
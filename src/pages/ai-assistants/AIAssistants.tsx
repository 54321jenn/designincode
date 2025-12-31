import { Paper, Typography, Box, Stack, Card, CardActionArea, CardContent } from '@mui/material'
import GettingStartedLayout from '../getting-started/_GettingStartedLayout'
import { useNavigate } from 'react-router-dom'
import { AutoFixHigh as AutoFixHighIcon, TextFields } from '@mui/icons-material'

export default function AIAssistants() {
  const navigate = useNavigate()

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

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Choose Your AI Assistant
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Select an AI assistant that fits your workflow. Both options offer powerful AI capabilities to help you code faster and learn more effectively.
        </Typography>

        <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
          <Card
            sx={{
              flex: 1,
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4,
              },
            }}
            onClick={() => navigate('/ai-assistants/cursor')}
          >
            <CardActionArea>
              <CardContent>
                <Stack spacing={2}>
                  <TextFields sx={{ fontSize: 40, color: 'primary.main' }} />
                  <Typography variant="h6">Cursor</Typography>
                  <Typography variant="body2" color="text.secondary">
                    A code editor with AI assistance built right in. Perfect for beginners and experienced developers alike.
                  </Typography>
                  <Typography variant="caption" color="primary" sx={{ fontWeight: 600 }}>
                    Recommended →
                  </Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card
            sx={{
              flex: 1,
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4,
              },
            }}
            onClick={() => navigate('/ai-assistants/augment')}
          >
            <CardActionArea>
              <CardContent>
                <Stack spacing={2}>
                  <AutoFixHighIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                  <Typography variant="h6">Augment</Typography>
                  <Typography variant="body2" color="text.secondary">
                    An AI assistant extension for VS Code or Cursor. Adds powerful features like code navigation and refactoring help.
                  </Typography>
                  <Typography variant="caption" color="primary" sx={{ fontWeight: 600 }}>
                    Learn More →
                  </Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>
      </Box>
    </GettingStartedLayout>
  )
}


import { Paper, Typography, Stack, Box, Card, CardContent, CardActionArea, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import GettingStartedLayout from './_GettingStartedLayout'
import { TextFields, AutoFixHigh, GitHub, Terminal } from '@mui/icons-material'

const steps = [
  {
    title: 'Editor Setup',
    description: 'Install and configure your code editor. Choose between Cursor (AI-powered) or VS Code (free and open-source).',
    icon: <TextFields />,
    path: '/getting-started/editor',
    order: 1,
  },
  {
    title: 'AI Assistants',
    description: 'Set up AI coding assistants to help you write code faster, debug errors, and learn as you go.',
    icon: <AutoFixHigh />,
    path: '/getting-started/assistants',
    order: 2,
  },
  {
    title: 'Command Line',
    description: 'Master the terminal to navigate your computer, run commands, and work more efficiently.',
    icon: <Terminal />,
    path: '/tutorials/command-line',
    order: 3,
  },
  {
    title: 'Git + GitHub',
    description: 'Learn the basics of version control and how to use GitHub to save and share your code.',
    icon: <GitHub />,
    path: '/getting-started/git',
    order: 4,
  },
]

export default function GetStarted() {
  const navigate = useNavigate()

  return (
    <GettingStartedLayout
      title="Get Started"
      subtitle="Your step-by-step guide to setting up your development environment and learning the fundamentals"
    >
      <Paper sx={{ p: 3, mb: 3, bgcolor: 'primary.dark', color: 'primary.contrastText' }}>
        <Typography variant="h6" gutterBottom>
          Welcome to Your Coding Journey
        </Typography>
        <Typography variant="body2" paragraph>
          This section will walk you through everything you need to get started with coding. Follow these steps in order
          to set up your development environment and learn the essential tools.
        </Typography>
        <Typography variant="body2">
          Each step builds on the previous one, so we recommend completing them sequentially. Don't worry—we'll guide you
          through each one!
        </Typography>
      </Paper>

      <Stack spacing={2}>
        {steps.map((step) => (
          <Card key={step.path} sx={{ border: '1px solid', borderColor: 'divider' }}>
            <CardActionArea onClick={() => navigate(step.path)}>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                      flexShrink: 0,
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                      <Typography variant="h6" component="div">
                        {step.order}. {step.title}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {step.description}
                    </Typography>
                    <Button variant="outlined" size="small" onClick={(e) => {
                      e.stopPropagation()
                      navigate(step.path)
                    }}>
                      Get Started
                    </Button>
                  </Box>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </GettingStartedLayout>
  )
}


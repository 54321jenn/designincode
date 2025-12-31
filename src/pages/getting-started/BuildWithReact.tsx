import { Paper, Typography, Stack, Box, Card, CardContent, CardActionArea, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import GettingStartedLayout from './_GettingStartedLayout'
import { Code, PlayArrow, Widgets, CloudUpload, School, OpenInNew } from '@mui/icons-material'

const steps = [
  {
    title: 'Setup React',
    description: 'Install Node.js and learn the fundamentals of React, including components, JSX, and how React works with Node.js.',
    icon: <Code />,
    path: '/getting-started/toolchain',
    order: 1,
  },
  {
    title: 'Quickstart with Vite',
    description: 'Create your first React application using Vite, a fast build tool that sets up everything you need to start coding.',
    icon: <PlayArrow />,
    path: '/getting-started/quickstart-vite',
    order: 2,
  },
  {
    title: 'UI Kit (MUI)',
    description: 'Install and use Material-UI, a popular component library that provides beautiful, ready-to-use React components.',
    icon: <Widgets />,
    path: '/getting-started/mui',
    order: 3,
  },
  {
    title: 'Publishing with Vercel',
    description: 'Deploy your React application to the web using Vercel, making it accessible to users around the world.',
    icon: <CloudUpload />,
    path: '/tutorials/vercel-publishing',
    order: 4,
  },
]

export default function BuildWithReact() {
  const navigate = useNavigate()

  return (
    <GettingStartedLayout
      title="Build with React"
      subtitle="Learn to build interactive web applications with React, a powerful JavaScript library for creating user interfaces"
    >
      <Paper sx={{ p: 3, mb: 3, bgcolor: 'primary.dark', color: 'primary.contrastText' }}>
        <Typography variant="h6" gutterBottom>
          What is React?
        </Typography>
        <Typography variant="body2" paragraph>
          React is a JavaScript library for building user interfaces. Created by Facebook, React makes it easy to create
          interactive web applications by breaking your UI into reusable components. Think of components like building
          blocks—you can combine them to create complex interfaces while keeping your code organized and maintainable.
        </Typography>
        <Typography variant="body2" paragraph>
          React uses a declarative approach, meaning you describe what you want your UI to look like, and React handles
          updating the browser efficiently. It's component-based, so you build small, reusable pieces that can be
          combined to create larger applications.
        </Typography>
        <Typography variant="body2">
          This section will guide you through setting up React, creating your first app, adding a UI component library,
          and deploying it to the web. Follow these steps in order to build a complete React application from scratch.
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

      <Paper sx={{ p: 3, mt: 3, bgcolor: 'primary.dark', color: 'primary.contrastText' }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <School sx={{ fontSize: 40 }} />
          <Box>
            <Typography variant="h6" gutterBottom>
              Want to learn more?
            </Typography>
            <Typography variant="body2" paragraph>
              Explore React's official documentation and interactive tutorials to dive deeper into React concepts like
              components, props, state, hooks, and more advanced patterns.
            </Typography>
            <Button
              variant="contained"
              href="https://react.dev/learn"
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<OpenInNew />}
              sx={{ mt: 1 }}
            >
              Visit React Tutorials
            </Button>
          </Box>
        </Stack>
      </Paper>
    </GettingStartedLayout>
  )
}


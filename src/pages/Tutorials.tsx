import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Chip,
  Stack,
  Avatar,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { AccessTime, SignalCellularAlt, Terminal, Cloud, DataObject, Code, GitHub, Layers } from '@mui/icons-material'

const tutorials = [
  {
    id: 1,
    title: 'Command Line Basics',
    description: 'Learn essential terminal commands to navigate and work with files like a pro.',
    duration: '15 min',
    level: 'Beginner',
    category: 'Fundamentals',
    path: '/tutorials/command-line',
    icon: <Terminal />,
    ready: true,
  },
  {
    id: 2,
    title: 'Clone a Repository',
    description: 'Get code from GitHub onto your machine and start working with it.',
    duration: '10 min',
    level: 'Beginner',
    category: 'Git',
    path: '/tutorials/clone-repo',
    icon: <GitHub />,
    ready: true,
  },
  {
    id: 3,
    title: 'Pull Requests',
    description: 'Learn how to propose changes, review code, and collaborate with others.',
    duration: '15 min',
    level: 'Beginner',
    category: 'Git',
    path: '/tutorials/pull-requests',
    icon: <Code />,
    ready: true,
  },
  {
    id: 4,
    title: 'Setup Python',
    description: 'Get Python running on your machine — no experience required.',
    duration: '10 min',
    level: 'Beginner',
    category: 'Python',
    path: '/tutorials/setup-python',
    icon: <DataObject />,
    ready: true,
  },
  {
    id: 5,
    title: 'Hello World with Streamlit',
    description: 'Build your first Python web app in under 5 minutes.',
    duration: '10 min',
    level: 'Beginner',
    category: 'Python',
    path: '/tutorials/hello-world-streamlit',
    icon: <Layers />,
    ready: true,
  },
  {
    id: 6,
    title: 'Deploy to Vercel',
    description: 'Put your React app on the internet in about 5 minutes — for free.',
    duration: '10 min',
    level: 'Beginner',
    category: 'Deploy',
    path: '/tutorials/vercel-publishing',
    icon: <Cloud />,
    ready: true,
  },
  {
    id: 7,
    title: 'MPC Servers',
    description: 'Learn about Model-Protocol-Controller architecture for building AI tools.',
    duration: '20 min',
    level: 'Advanced',
    category: 'Architecture',
    path: '/tutorials/mpc-servers',
    icon: <Code />,
    ready: false,
  },
]

const levelColors: Record<string, 'success' | 'warning' | 'error'> = {
  Beginner: 'success',
  Intermediate: 'warning',
  Advanced: 'error',
}

export default function Tutorials() {
  const navigate = useNavigate()
  
  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Tutorials
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Step-by-step guides to help you master designing in code. Start anywhere — each tutorial stands alone.
      </Typography>

      <Stack spacing={2}>
        {tutorials.map((tutorial) => (
          <Card 
            key={tutorial.id}
            sx={{ 
              opacity: tutorial.ready ? 1 : 0.6,
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': tutorial.ready ? {
                transform: 'translateX(4px)',
                boxShadow: 4,
              } : {},
            }}
          >
            <CardActionArea 
              onClick={() => tutorial.ready && navigate(tutorial.path)}
              disabled={!tutorial.ready}
            >
              <CardContent>
                <Stack direction="row" spacing={3} alignItems="center">
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      bgcolor: tutorial.ready ? 'primary.main' : 'action.disabled',
                      fontSize: '1.5rem',
                    }}
                  >
                    {tutorial.icon}
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
                      <Typography variant="h6">{tutorial.title}</Typography>
                      <Chip
                        label={tutorial.level}
                        size="small"
                        color={levelColors[tutorial.level]}
                      />
                      {!tutorial.ready && (
                        <Chip label="Coming soon" size="small" variant="outlined" />
                      )}
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {tutorial.description}
                    </Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <AccessTime fontSize="small" color="action" />
                        <Typography variant="caption" color="text.secondary">
                          {tutorial.duration}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <SignalCellularAlt fontSize="small" color="action" />
                        <Typography variant="caption" color="text.secondary">
                          {tutorial.category}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}

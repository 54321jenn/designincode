import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Chip,
  Stack,
  LinearProgress,
  Avatar,
} from '@mui/material'
import { AccessTime, SignalCellularAlt } from '@mui/icons-material'

const tutorials = [
  {
    id: 1,
    title: 'Getting Started with React & MUI',
    description: 'Learn the basics of setting up a React project with Material UI.',
    duration: '15 min',
    level: 'Beginner',
    progress: 100,
    category: 'Fundamentals',
  },
  {
    id: 2,
    title: 'Building Responsive Layouts',
    description: 'Master the Grid system and create layouts that work on any screen size.',
    duration: '25 min',
    level: 'Beginner',
    progress: 60,
    category: 'Layout',
  },
  {
    id: 3,
    title: 'Custom Theming & Styling',
    description: 'Create your own theme and learn advanced styling techniques.',
    duration: '30 min',
    level: 'Intermediate',
    progress: 0,
    category: 'Styling',
  },
  {
    id: 4,
    title: 'Animations & Transitions',
    description: 'Add life to your UI with smooth animations and micro-interactions.',
    duration: '20 min',
    level: 'Intermediate',
    progress: 0,
    category: 'Animation',
  },
  {
    id: 5,
    title: 'Building a Dashboard',
    description: 'Put it all together by building a complete admin dashboard.',
    duration: '45 min',
    level: 'Advanced',
    progress: 0,
    category: 'Project',
  },
]

const levelColors: Record<string, 'success' | 'warning' | 'error'> = {
  Beginner: 'success',
  Intermediate: 'warning',
  Advanced: 'error',
}

export default function Tutorials() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Tutorials
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Step-by-step guides to help you master designing in code.
      </Typography>

      <Stack spacing={2}>
        {tutorials.map((tutorial) => (
          <Card key={tutorial.id}>
            <CardActionArea>
              <CardContent>
                <Stack direction="row" spacing={3} alignItems="center">
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      bgcolor: 'primary.main',
                      fontSize: '1.5rem',
                    }}
                  >
                    {tutorial.id}
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
                      <Typography variant="h6">{tutorial.title}</Typography>
                      <Chip
                        label={tutorial.level}
                        size="small"
                        color={levelColors[tutorial.level]}
                      />
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
                  <Box sx={{ width: 100 }}>
                    <Typography variant="caption" color="text.secondary">
                      {tutorial.progress}% complete
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={tutorial.progress}
                      sx={{ height: 6, borderRadius: 3 }}
                    />
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


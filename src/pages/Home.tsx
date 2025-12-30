import { Box, Typography, Grid, Card, CardContent, CardActionArea, Chip, Stack } from '@mui/material'
import { School, Code, Palette } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const features = [
  {
    title: 'Interactive Tutorials',
    description: 'Learn by doing with hands-on coding exercises and real-world projects.',
    icon: <School sx={{ fontSize: 40 }} />,
    path: '/tutorials',
    color: '#6366f1',
  },
  {
    title: 'Component Library',
    description: 'Explore reusable UI components with live examples and code snippets.',
    icon: <Code sx={{ fontSize: 40 }} />,
    path: '/components',
    color: '#ec4899',
  },
  {
    title: 'Design Principles',
    description: 'Master the fundamentals of visual design, typography, and color theory.',
    icon: <Palette sx={{ fontSize: 40 }} />,
    path: '/design-principles',
    color: '#14b8a6',
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <Box>
      <Box sx={{ mb: 6, textAlign: 'center', py: 4 }}>
        <Chip label="Welcome to Design in Code" color="primary" sx={{ mb: 2 }} />
        <Typography variant="h1" gutterBottom>
          Learn to Design in Code
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Master the art of designing stunning user interfaces with React, Material UI, 
          and modern CSS techniques.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {features.map((feature) => (
          <Grid size={{ xs: 12, md: 4 }} key={feature.title}>
            <Card 
              sx={{ 
                height: '100%',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 12px 40px ${feature.color}20`,
                },
              }}
            >
              <CardActionArea 
                onClick={() => navigate(feature.path)}
                sx={{ p: 2, height: '100%' }}
              >
                <CardContent>
                  <Stack spacing={2}>
                    <Box sx={{ color: feature.color }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" component="h2">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}


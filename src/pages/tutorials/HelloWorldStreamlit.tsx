import { Paper, Typography, Box, Divider } from '@mui/material'
import GettingStartedLayout, { CodeBlock } from '../getting-started/_GettingStartedLayout'
import { PlayArrow } from '@mui/icons-material'

export default function HelloWorldStreamlit() {
  return (
    <GettingStartedLayout
      title="Hello World with Streamlit"
      subtitle="Create your first Streamlit application and see it run"
    >
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          What is Streamlit?
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Streamlit is a Python framework that makes it easy to build and share beautiful, custom web apps for
          machine learning and data science. With Streamlit, you can create interactive applications with just
          a few lines of Python code.
        </Typography>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Getting Started
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Content coming soon...
        </Typography>
      </Paper>
    </GettingStartedLayout>
  )
}


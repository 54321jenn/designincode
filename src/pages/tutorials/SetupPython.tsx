import { Paper, Typography, Box, Divider } from '@mui/material'
import GettingStartedLayout, { CodeBlock } from '../getting-started/_GettingStartedLayout'
import { Settings } from '@mui/icons-material'

export default function SetupPython() {
  return (
    <GettingStartedLayout
      title="Setup Python"
      subtitle="Learn how to install and configure Python on your system"
    >
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          What is Python?
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Python is a versatile programming language known for its simplicity and readability. It's widely used for
          web development, data science, automation, and more. Setting up Python correctly is the first step to
          building Python applications.
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


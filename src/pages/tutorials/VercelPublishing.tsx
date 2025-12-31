import { Paper, Typography, Divider } from '@mui/material'
import GettingStartedLayout from '../getting-started/_GettingStartedLayout'

export default function VercelPublishing() {
  return (
    <GettingStartedLayout
      title="Publishing with Vercel"
      subtitle="Learn how to deploy and publish your applications using Vercel"
    >
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          What is Vercel?
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Vercel is a cloud platform that makes it easy to deploy, scale, and host your web applications. It provides
          automatic deployments from Git, global CDN, and serverless functions, making it perfect for modern web
          applications built with React, Next.js, and other frameworks.
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


import { Paper, Typography, Divider } from '@mui/material'
import GettingStartedLayout from '../getting-started/_GettingStartedLayout'

export default function MpcServers() {
  return (
    <GettingStartedLayout
      title="MPC Servers"
      subtitle="Learn how to set up and deploy your applications to MPC servers"
    >
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          What are MPC Servers?
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          MPC (Multi-Party Computation) servers provide a secure way to deploy and run applications that require
          privacy-preserving computation. These servers enable you to run code without exposing sensitive data to
          individual parties.
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


import { Paper, Typography } from '@mui/material'
import GettingStartedLayout from './_GettingStartedLayout'

export default function Assistants() {
  return (
    <GettingStartedLayout
      title="AI Assistants"
      subtitle="Pick your co-pilot: Augment in VS Code or Cursor. Your choice."
    >
      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Option A: VS Code + Augment
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Install the Augment extension in VS Code, sign in, and use it for code navigation + refactors.
        </Typography>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Option B: Cursor
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cursor is a VS Code-style editor with assistant features baked in. Great for fast iteration.
        </Typography>
      </Paper>
    </GettingStartedLayout>
  )
}
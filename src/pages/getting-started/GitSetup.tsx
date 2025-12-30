import { Paper, Typography } from '@mui/material'
import GettingStartedLayout, { CodeBlock } from './_GettingStartedLayout'

export default function GitSetup() {
  return (
    <GettingStartedLayout
      title="Git + GitHub"
      subtitle="Create a GitHub account, configure Git, and push your first repo."
    >
      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Create your GitHub account
        </Typography>
        <Typography variant="body2" color="text.secondary">
          If you already have one, great. If not, sign up and verify your email.
        </Typography>
      </Paper>

      <CodeBlock
        label="Configure Git (once)"
        code={`git config --global user.name "Your Name"
git config --global user.email "you@example.com"`}
      />

      <CodeBlock
        label="Initialize + first commit"
        code={`git init
git add .
git commit -m "initial commit"`}
      />
    </GettingStartedLayout>
  )
}
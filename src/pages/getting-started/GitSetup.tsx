import { Paper, Typography, Box, Divider, Stack, Button } from '@mui/material'
import { School, OpenInNew } from '@mui/icons-material'
import GettingStartedLayout, { CodeBlock } from './_GettingStartedLayout'

export default function GitSetup() {
  return (
    <GettingStartedLayout
      title="Git + GitHub"
      subtitle="Create a GitHub account, configure Git, and push your first repo."
    >
      <Box
        sx={{
          width: '100%',
          mb: 3,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <img
          src="/github.png"
          alt="Git + GitHub Hero"
          style={{
            width: '100%',
            maxHeight: '300px',
            height: 'auto',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Box>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          What are Git and GitHub?
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Think of Git and GitHub like a time machine and cloud storage for your code, combined with a collaboration
          platform.
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>
              <strong>Git:</strong> A version control system that tracks changes to your code. It's like having a save
              history where you can go back to any previous version, see what changed, and work on different features
              without breaking your main code.
            </li>
            <li>
              <strong>GitHub:</strong> A website that stores your code online (in "repositories" or "repos"). It's like
              Google Drive for code, but with powerful features for collaboration, sharing, and showing your work to
              others.
            </li>
          </ul>
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Together, they let you save your work safely, collaborate with others, and never lose your code. Every time you
          "commit" (save a snapshot), you create a checkpoint you can return to if something goes wrong. It's essential
          for any coding project, big or small.
        </Typography>
      </Paper>

      <Divider sx={{ my: 2 }} />

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

      <Paper sx={{ p: 2, mt: 2, bgcolor: 'primary.dark', color: 'primary.contrastText' }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <School sx={{ fontSize: 32 }} />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body2" paragraph sx={{ mb: 1 }}>
              Want to learn more about getting started with GitHub?
            </Typography>
            <Button
              variant="contained"
              href="https://docs.github.com/en/get-started/onboarding/getting-started-with-your-github-account"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              endIcon={<OpenInNew />}
              sx={{ bgcolor: 'primary.contrastText', color: 'primary.dark', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}
            >
              Learn More
            </Button>
          </Box>
        </Stack>
      </Paper>
    </GettingStartedLayout>
  )
}
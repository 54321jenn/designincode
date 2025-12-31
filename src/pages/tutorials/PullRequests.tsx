import { Paper, Typography, Box, Divider, Button, Stack } from '@mui/material'
import GettingStartedLayout from '../getting-started/_GettingStartedLayout'
import { School, OpenInNew } from '@mui/icons-material'

export default function PullRequests() {
  return (
    <GettingStartedLayout
      title="Pull Requests"
      subtitle="Learn how to collaborate with development teams using pull requests"
    >
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          What are Pull Requests?
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Pull requests (PRs) are proposals to merge code changes into a project. They're GitHub's foundational
          collaboration feature, letting you discuss and review changes before merging them. This helps teams work
          together, catch issues early, and maintain code quality.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          When you create a pull request, you're asking others to review your code changes and merge them into the main
          codebase. Pull requests provide a space for discussion, feedback, and collaboration before code is merged.
        </Typography>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          How Pull Requests Work
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Pull requests have several key components:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 2 }}>
          <Typography component="li" variant="body2" color="text.secondary" paragraph>
            <strong>Conversation tab:</strong> Displays a description of changes, timeline of events, and comments from
            collaborators
          </Typography>
          <Typography component="li" variant="body2" color="text.secondary" paragraph>
            <strong>Commits tab:</strong> Shows all commits made to the pull request branch in chronological order
          </Typography>
          <Typography component="li" variant="body2" color="text.secondary" paragraph>
            <strong>Checks tab:</strong> Displays the status of automated tests, builds, or continuous integration
            workflows
          </Typography>
          <Typography component="li" variant="body2" color="text.secondary" paragraph>
            <strong>Files changed tab:</strong> Shows the differences between proposed changes and existing code
          </Typography>
        </Box>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Draft Pull Requests
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          When you create a pull request, you can choose to make it a draft. Draft pull requests cannot be merged, and
          code owners are not automatically requested to review them. This is useful when you want to share
          work-in-progress without formally requesting reviews.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          When you're ready to get feedback, you can mark your draft pull request as ready for review. You can also
          convert a pull request to a draft at any time.
        </Typography>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3, bgcolor: 'primary.dark', color: 'primary.contrastText', mt: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <School sx={{ fontSize: 40 }} />
          <Box>
            <Typography variant="h6" gutterBottom>
              Want to learn more?
            </Typography>
            <Typography variant="body2" paragraph>
              Explore the official GitHub documentation on pull requests to learn about creating PRs, reviewing changes,
              resolving conflicts, and more advanced collaboration workflows.
            </Typography>
            <Button
              variant="contained"
              href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests"
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<OpenInNew />}
              sx={{ mt: 1 }}
            >
              Go to GitHub Documentation
            </Button>
          </Box>
        </Stack>
      </Paper>
    </GettingStartedLayout>
  )
}


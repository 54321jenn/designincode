import { Paper, Typography, Box, Divider, Stack, Button } from '@mui/material'
import { OpenInNew } from '@mui/icons-material'
import GettingStartedLayout, { CodeBlock } from '../getting-started/_GettingStartedLayout'
import { School } from '@mui/icons-material'

export default function CloneRepo() {
  return (
    <GettingStartedLayout
      title="Clone a Repository"
      subtitle="Learn how to download and work with existing code repositories"
    >
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          What is Cloning?
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Cloning a repository means creating a local copy of a remote repository (like one on GitHub) on your computer.
          This lets you work with the code, make changes, and contribute to the project.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          When you clone a repository, you get all the files, commit history, and branches from the remote repository.
          This creates a complete working copy that you can modify and experiment with.
        </Typography>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          How to Clone a Repository
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          To clone a repository, you'll need the repository's URL. You can find this on the repository's GitHub page by
          clicking the green "Code" button.
        </Typography>

        <CodeBlock
          label="Clone using HTTPS (recommended for beginners)"
          code={`git clone https://github.com/username/repository-name.git
cd repository-name`}
        />
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          What Happens After Cloning?
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          After cloning, you'll have a new folder on your computer with all the repository's files. You can:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 2 }}>
          <Typography component="li" variant="body2" color="text.secondary" paragraph>
            Navigate into the folder using <code>cd repository-name</code>
          </Typography>
          <Typography component="li" variant="body2" color="text.secondary" paragraph>
            View and edit the files
          </Typography>
          <Typography component="li" variant="body2" color="text.secondary" paragraph>
            Install dependencies (if needed) using commands like <code>npm install</code>
          </Typography>
          <Typography component="li" variant="body2" color="text.secondary" paragraph>
            Make changes and create commits
          </Typography>
          <Typography component="li" variant="body2" color="text.secondary" paragraph>
            Push your changes back to the repository (if you have permission)
          </Typography>
        </Box>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Cloning to a Specific Folder
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          By default, Git creates a folder with the repository's name. You can also specify a different folder name:
        </Typography>

        <CodeBlock
          label="Clone to a custom folder name"
          code={`git clone https://github.com/username/repository-name.git my-custom-folder-name
cd my-custom-folder-name`}
        />
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Advanced: Clone using SSH
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          If you have SSH keys set up with GitHub, you can clone repositories using SSH instead of HTTPS. SSH provides
          a more secure connection and doesn't require entering your credentials each time.
        </Typography>

        <CodeBlock
          label="Clone using SSH"
          code={`git clone git@github.com:username/repository-name.git
cd repository-name`}
        />

        <Paper sx={{ p: 3, bgcolor: 'primary.dark', color: 'primary.contrastText', mt: 3 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <School sx={{ fontSize: 40 }} />
            <Box>
              <Typography variant="h6" gutterBottom>
                Want to learn more about SSH?
              </Typography>
              <Typography variant="body2" paragraph>
                Learn how to set up SSH keys, clone repositories using SSH, and understand the benefits of using SSH
                with GitHub.
              </Typography>
              <Button
                variant="contained"
                href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh"
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<OpenInNew />}
                sx={{ mt: 1 }}
              >
                Go to GitHub SSH Documentation
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Paper>
    </GettingStartedLayout>
  )
}


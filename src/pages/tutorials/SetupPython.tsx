import { Paper, Typography, Divider, Box, Stack, Alert, Button, Link } from '@mui/material'
import { Lightbulb, Download, CheckCircle, Terminal, OpenInNew } from '@mui/icons-material'
import GettingStartedLayout, { CodeBlock } from '../getting-started/_GettingStartedLayout'

export default function SetupPython() {
  return (
    <GettingStartedLayout
      title="Setup Python"
      subtitle="Get Python running on your machine in about 10 minutes — no experience required"
    >
      <Paper sx={{ p: 3, bgcolor: 'primary.dark', color: 'primary.contrastText' }}>
        <Typography variant="h6" gutterBottom>
          Why Python?
        </Typography>
        <Typography variant="body2" paragraph>
          If React is great for building interfaces, Python is great for building <em>everything else</em> — 
          data tools, automation, prototypes, AI experiments. It reads almost like English, which makes it 
          perfect for designers who want to do more than just UI.
        </Typography>
        <Typography variant="body2">
          By the end of this guide, you'll have Python installed and ready to build your first app.
        </Typography>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Step 1: Check if Python is Already Installed
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Good news: many computers come with Python pre-installed. Let's check yours first.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Open your terminal and run:
        </Typography>
        <CodeBlock 
          label="Check Python version"
          code={`python3 --version
# You should see something like: Python 3.11.5`}
        />
        <Alert icon={<CheckCircle />} severity="success" sx={{ mt: 2 }}>
          <Typography variant="body2">
            <strong>See a version number?</strong> You're good! Skip to Step 3.
          </Typography>
        </Alert>
        <Alert icon={<Lightbulb />} severity="info" sx={{ mt: 2 }}>
          <Typography variant="body2">
            <strong>See "command not found"?</strong> No worries — that's what Step 2 is for.
          </Typography>
        </Alert>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Step 2: Install Python
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Pick your operating system:
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" gutterBottom sx={{ mt: 2, fontWeight: 700 }}>
            On Mac (Recommended: Homebrew)
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            If you have Homebrew installed (you probably do if you followed the earlier guides):
          </Typography>
          <CodeBlock 
            label="Install via Homebrew"
            code={`brew install python`}
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Don't have Homebrew? Install it first:
          </Typography>
          <CodeBlock 
            label="Install Homebrew"
            code={`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>
            On Windows
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Download the installer from the official Python website:
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Button
              variant="contained"
              startIcon={<Download />}
              href="https://www.python.org/downloads/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Python
            </Button>
          </Stack>
          <Alert severity="warning" sx={{ mt: 1 }}>
            <Typography variant="body2">
              <strong>Important:</strong> During installation, check the box that says "Add Python to PATH". 
              This saves you headaches later.
            </Typography>
          </Alert>
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>
            On Linux
          </Typography>
          <CodeBlock 
            label="Ubuntu/Debian"
            code={`sudo apt update
sudo apt install python3 python3-pip python3-venv`}
          />
        </Box>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Step 3: Verify Your Installation
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Let's make sure everything worked. Run these commands:
        </Typography>
        <CodeBlock 
          label="Verify Python and pip"
          code={`python3 --version
# Expected: Python 3.x.x

pip3 --version  
# Expected: pip 23.x.x (or similar)`}
        />
        <Alert icon={<CheckCircle />} severity="success" sx={{ mt: 2 }}>
          <Typography variant="body2">
            Both commands return version numbers? <strong>You did it!</strong> Python is ready to go.
          </Typography>
        </Alert>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Step 4: Create Your First Virtual Environment
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Virtual environments keep your projects tidy. Think of them like separate toolboxes — 
          each project gets its own set of tools without cluttering up your system.
        </Typography>
        <CodeBlock 
          label="Create and activate a virtual environment"
          code={`# Create a new project folder
mkdir my-python-project
cd my-python-project

# Create a virtual environment called 'venv'
python3 -m venv venv

# Activate it (Mac/Linux)
source venv/bin/activate

# Activate it (Windows)
venv\\Scripts\\activate

# You'll see (venv) at the start of your terminal prompt`}
        />
        <Alert icon={<Lightbulb />} severity="info" sx={{ mt: 2 }}>
          <Typography variant="body2">
            <strong>Pro tip:</strong> Always activate your virtual environment before installing packages 
            or running your project. When you're done, type <code>deactivate</code> to exit.
          </Typography>
        </Alert>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Step 5: Install Your First Package
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Python packages are like plugins — they add superpowers to your projects. Let's install 
          Streamlit, which we'll use in the next tutorial to build a web app.
        </Typography>
        <CodeBlock 
          label="Install Streamlit"
          code={`# Make sure your virtual environment is activated!
pip install streamlit

# Verify it installed
streamlit --version`}
        />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          See a version number? You just installed your first Python package. 
        </Typography>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3, bgcolor: 'success.dark', color: 'success.contrastText' }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <CheckCircle />
          <Typography variant="h6">
            Nice Work!
          </Typography>
        </Stack>
        <Typography variant="body2" paragraph>
          You just set up Python, created a virtual environment, and installed your first package. 
          That's real development work.
        </Typography>
        <Typography variant="body2">
          Ready to build something? Head to the <strong>Hello World with Streamlit</strong> tutorial 
          to create your first Python web app in about 5 minutes.
        </Typography>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Troubleshooting
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>
              <strong>"python" vs "python3":</strong> On Mac/Linux, use <code>python3</code>. 
              On Windows, <code>python</code> usually works after installation.
            </li>
            <li>
              <strong>"pip not found":</strong> Try <code>pip3</code> instead, or reinstall Python 
              making sure to check "Add to PATH".
            </li>
            <li>
              <strong>Permission errors:</strong> Don't use <code>sudo pip install</code> — use virtual 
              environments instead (Step 4).
            </li>
          </ul>
        </Typography>
      </Paper>
    </GettingStartedLayout>
  )
}

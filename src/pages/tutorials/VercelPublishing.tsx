import { Paper, Typography, Divider, Box, Stack, Alert, Button } from '@mui/material'
import { Lightbulb, CheckCircle, Cloud, OpenInNew, Celebration, GitHub, Rocket } from '@mui/icons-material'
import GettingStartedLayout, { CodeBlock } from '../getting-started/_GettingStartedLayout'

export default function VercelPublishing() {
  return (
    <GettingStartedLayout
      title="Deploy to Vercel"
      subtitle="Put your React app on the internet in about 5 minutes — for free"
    >
      <Paper sx={{ p: 3, bgcolor: 'primary.dark', color: 'primary.contrastText' }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Cloud />
          <Typography variant="h6">
            Why Vercel?
          </Typography>
        </Stack>
        <Typography variant="body2" paragraph>
          Vercel is where your code becomes a real website. Push to GitHub, Vercel automatically builds and 
          deploys your app. Free tier is generous enough for most projects.
        </Typography>
        <Typography variant="body2">
          By the end of this tutorial, your React app will have a real URL you can share with anyone.
        </Typography>
      </Paper>

      <Alert icon={<Lightbulb />} severity="info">
        <Typography variant="body2">
          <strong>Prerequisites:</strong> A React/Vite project, a GitHub account, and your code pushed to a repo. 
          Haven't done that? Complete the <strong>Git + GitHub</strong> tutorial first.
        </Typography>
      </Alert>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Step 1: Sign Up for Vercel
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Head to Vercel and sign up with your GitHub account. This connects everything automatically.
        </Typography>
        <Button
          variant="contained"
          endIcon={<OpenInNew />}
          href="https://vercel.com/signup"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mb: 2 }}
        >
          Sign Up for Vercel
        </Button>
        <Alert icon={<GitHub />} severity="info" sx={{ mt: 2 }}>
          <Typography variant="body2">
            <strong>Tip:</strong> Choose "Continue with GitHub" — this lets Vercel access your repos 
            and auto-deploy when you push changes.
          </Typography>
        </Alert>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Step 2: Import Your Project
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Once logged in:
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <ol style={{ margin: 0, paddingLeft: 20 }}>
            <li>Click <strong>"Add New..."</strong> → <strong>"Project"</strong></li>
            <li>You'll see a list of your GitHub repos</li>
            <li>Find your project and click <strong>"Import"</strong></li>
          </ol>
        </Typography>
        <Box 
          sx={{ 
            mt: 3, 
            p: 3, 
            borderRadius: 2, 
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography variant="subtitle2" gutterBottom>
            Don't see your repo?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Click "Adjust GitHub App Permissions" and grant Vercel access to the specific repo 
            (or all repos if you prefer).
          </Typography>
        </Box>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Step 3: Configure Build Settings
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Vercel is smart — it usually detects Vite/React projects automatically. But let's make sure 
          the settings are right:
        </Typography>
        <Box 
          sx={{ 
            p: 2, 
            borderRadius: 2, 
            bgcolor: 'background.default',
            border: '1px solid',
            borderColor: 'divider',
            fontFamily: 'monospace',
            fontSize: '0.875rem'
          }}
        >
          <Typography variant="body2" component="div">
            <strong>Framework Preset:</strong> Vite<br />
            <strong>Build Command:</strong> npm run build<br />
            <strong>Output Directory:</strong> dist<br />
            <strong>Install Command:</strong> npm install
          </Typography>
        </Box>
        <Alert icon={<CheckCircle />} severity="success" sx={{ mt: 2 }}>
          <Typography variant="body2">
            These are the defaults for Vite projects. If they're already filled in, you're good!
          </Typography>
        </Alert>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Rocket color="primary" />
          <Typography variant="h6">
            Step 4: Deploy!
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary" paragraph>
          Click <strong>"Deploy"</strong> and watch the magic happen.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Vercel will:
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <ol style={{ margin: 0, paddingLeft: 20 }}>
            <li>Clone your repo</li>
            <li>Install dependencies (<code>npm install</code>)</li>
            <li>Build your app (<code>npm run build</code>)</li>
            <li>Deploy to their global CDN</li>
            <li>Give you a URL like <code>your-project.vercel.app</code></li>
          </ol>
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          This usually takes 30-60 seconds. You'll see real-time build logs if you want to watch.
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, bgcolor: 'success.dark', color: 'success.contrastText' }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Celebration />
          <Typography variant="h6">
            Your App is Live! 🎉
          </Typography>
        </Stack>
        <Typography variant="body2" paragraph>
          Click the URL Vercel gives you. That's your app. On the actual internet. 
          Share it with anyone — they can use it right now.
        </Typography>
        <Typography variant="body2">
          This is what "shipping" feels like. Get used to it.
        </Typography>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Step 5: Auto-Deploy on Push
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Here's the best part: now that your repo is connected, every time you push to GitHub, 
          Vercel automatically redeploys your app.
        </Typography>
        <CodeBlock 
          label="Make changes and push"
          code={`# Make some changes to your code
# Then commit and push:
git add .
git commit -m "Updated homepage"
git push

# Vercel starts deploying automatically!`}
        />
        <Alert icon={<Lightbulb />} severity="info" sx={{ mt: 2 }}>
          <Typography variant="body2">
            <strong>Preview deployments:</strong> Push to a branch (not main), and Vercel creates a 
            preview URL just for that branch. Great for testing before merging.
          </Typography>
        </Alert>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Custom Domain (Optional)
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Want <code>yourname.com</code> instead of <code>your-project.vercel.app</code>?
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <ol style={{ margin: 0, paddingLeft: 20 }}>
            <li>Go to your project on Vercel</li>
            <li>Click <strong>"Settings"</strong> → <strong>"Domains"</strong></li>
            <li>Add your domain and follow the DNS instructions</li>
          </ol>
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Vercel handles HTTPS certificates automatically. No extra config needed.
        </Typography>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Troubleshooting
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>
              <strong>"Build failed":</strong> Check the build logs — usually it's a missing dependency 
              or a TypeScript error. Fix locally, push again.
            </li>
            <li>
              <strong>Blank page after deploy:</strong> Make sure your <code>vite.config.ts</code> has 
              the correct <code>base</code> path (usually leave it default).
            </li>
            <li>
              <strong>404 on refresh:</strong> For single-page apps with routing, add a <code>vercel.json</code>:
            </li>
          </ul>
        </Typography>
        <CodeBlock 
          label="vercel.json (for React Router)"
          code={`{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}`}
        />
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          What About Streamlit Apps?
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Streamlit apps need a Python backend, so Vercel isn't the right fit. Instead, use:
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            variant="outlined"
            endIcon={<OpenInNew />}
            href="https://streamlit.io/cloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            Streamlit Cloud (Free)
          </Button>
          <Button
            variant="outlined"
            endIcon={<OpenInNew />}
            href="https://railway.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Railway
          </Button>
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Streamlit Cloud is the easiest — connect your GitHub repo and it handles everything.
        </Typography>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          You're a Shipper Now
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          You've gone from "I have code on my computer" to "I have an app on the internet anyone can use."
          That's the whole game. Build, ship, iterate.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Next up:</strong> Learn about custom theming and styling to make your apps look uniquely yours.
        </Typography>
      </Paper>
    </GettingStartedLayout>
  )
}

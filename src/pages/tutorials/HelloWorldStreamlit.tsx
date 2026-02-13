import { Paper, Typography, Divider, Box, Stack, Alert, Button } from '@mui/material'
import { Lightbulb, CheckCircle, Celebration, OpenInNew, RocketLaunch } from '@mui/icons-material'
import GettingStartedLayout, { CodeBlock } from '../getting-started/_GettingStartedLayout'

export default function HelloWorldStreamlit() {
  return (
    <GettingStartedLayout
      title="Hello World with Streamlit"
      subtitle="Build and run your first Python web app in under 5 minutes"
    >
      <Paper sx={{ p: 3, bgcolor: 'primary.dark', color: 'primary.contrastText' }}>
        <Typography variant="h6" gutterBottom>
          What We're Building
        </Typography>
        <Typography variant="body2" paragraph>
          Streamlit turns Python scripts into interactive web apps — no HTML, CSS, or JavaScript required. 
          It's like magic for data tools and prototypes.
        </Typography>
        <Typography variant="body2">
          In this tutorial, you'll create a working web app that responds to user input. 
          Yes, really. In 5 minutes.
        </Typography>
      </Paper>

      <Alert icon={<Lightbulb />} severity="info">
        <Typography variant="body2">
          <strong>Prerequisites:</strong> You should have Python installed with Streamlit. 
          Haven't done that yet? Complete the <strong>Setup Python</strong> tutorial first.
        </Typography>
      </Alert>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Step 1: Create Your Project
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Let's set up a clean workspace:
        </Typography>
        <CodeBlock 
          label="Create project folder"
          code={`# Create and enter your project folder
mkdir streamlit-hello
cd streamlit-hello

# Create and activate a virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install Streamlit (if you haven't already)
pip install streamlit`}
        />
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Step 2: Write Your First App
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Create a new file called <code>app.py</code> in your project folder. You can do this in your 
          code editor or from the terminal:
        </Typography>
        <CodeBlock 
          label="Create the file"
          code={`touch app.py  # Mac/Linux
# Or just create a new file in Cursor/VS Code`}
        />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 2 }}>
          Now open <code>app.py</code> and paste this code:
        </Typography>
        <CodeBlock 
          label="app.py"
          code={`import streamlit as st

# Page config
st.set_page_config(page_title="My First App", page_icon="✨")

# Title
st.title("Hello, Streamlit! 👋")

# Some text
st.write("This is your first Streamlit app. Not bad for a few lines of code!")

# Interactive widget
name = st.text_input("What's your name?")

if name:
    st.success(f"Nice to meet you, {name}! 🎉")

# A fun button
if st.button("Click me!"):
    st.balloons()`}
        />
        <Alert icon={<Lightbulb />} severity="info" sx={{ mt: 2 }}>
          <Typography variant="body2">
            <strong>What's happening here?</strong> We import Streamlit, add a title, some text, 
            an input field, and a button. Streamlit handles all the web stuff automatically.
          </Typography>
        </Alert>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <RocketLaunch color="primary" />
          <Typography variant="h6">
            Step 3: Run It!
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary" paragraph>
          This is the moment of truth. In your terminal, run:
        </Typography>
        <CodeBlock 
          label="Start the app"
          code={`streamlit run app.py`}
        />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Your browser should open automatically to <code>http://localhost:8501</code>
        </Typography>
        <Alert icon={<CheckCircle />} severity="success" sx={{ mt: 2 }}>
          <Typography variant="body2">
            <strong>See your app running?</strong> Type your name, click the button, watch the balloons. 
            You just built a web app with Python. 🎈
          </Typography>
        </Alert>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Step 4: Make It Yours
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          The app auto-reloads when you save changes. Try adding some of these:
        </Typography>
        <CodeBlock 
          label="More Streamlit widgets to try"
          code={`# Add a slider
age = st.slider("How old are you?", 0, 100, 25)
st.write(f"You are {age} years old")

# Add a selectbox
color = st.selectbox("Pick a color", ["Red", "Green", "Blue"])
st.write(f"You picked {color}")

# Add columns for layout
col1, col2 = st.columns(2)
col1.metric("Temperature", "72°F", "2°F")
col2.metric("Humidity", "45%", "-5%")

# Add an expander for details
with st.expander("Click to see more"):
    st.write("Here's some hidden content!")
    st.image("https://placekitten.com/400/200")`}
        />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Each time you save, Streamlit asks if you want to rerun. Click "Always rerun" for a smoother flow.
        </Typography>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Quick Reference: Common Widgets
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <Box sx={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #444' }}>Widget</th>
                  <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #444' }}>Code</th>
                  <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #444' }}>Use For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '8px' }}>Text input</td>
                  <td style={{ padding: '8px' }}><code>st.text_input("Label")</code></td>
                  <td style={{ padding: '8px' }}>Names, search, short text</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Number input</td>
                  <td style={{ padding: '8px' }}><code>st.number_input("Label")</code></td>
                  <td style={{ padding: '8px' }}>Quantities, prices</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Slider</td>
                  <td style={{ padding: '8px' }}><code>st.slider("Label", 0, 100)</code></td>
                  <td style={{ padding: '8px' }}>Ranges, ratings</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Selectbox</td>
                  <td style={{ padding: '8px' }}><code>st.selectbox("Label", [...])</code></td>
                  <td style={{ padding: '8px' }}>Choosing one option</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Checkbox</td>
                  <td style={{ padding: '8px' }}><code>st.checkbox("Label")</code></td>
                  <td style={{ padding: '8px' }}>Yes/no, toggles</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Button</td>
                  <td style={{ padding: '8px' }}><code>st.button("Label")</code></td>
                  <td style={{ padding: '8px' }}>Actions, submissions</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>File upload</td>
                  <td style={{ padding: '8px' }}><code>st.file_uploader("Label")</code></td>
                  <td style={{ padding: '8px' }}>Images, CSVs, documents</td>
                </tr>
              </tbody>
            </table>
          </Box>
        </Typography>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3, bgcolor: 'success.dark', color: 'success.contrastText' }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Celebration />
          <Typography variant="h6">
            You Built a Web App! 
          </Typography>
        </Stack>
        <Typography variant="body2" paragraph>
          Seriously — that's a real, interactive web application. No HTML. No CSS. No JavaScript frameworks. 
          Just Python.
        </Typography>
        <Typography variant="body2" paragraph>
          This is why designers love Streamlit: you can prototype data tools, dashboards, and internal apps 
          faster than arguing about which framework to use.
        </Typography>
        <Typography variant="body2">
          <strong>Next up:</strong> Learn how to deploy your app to the web with Vercel so anyone can use it.
        </Typography>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Learn More
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            variant="outlined"
            endIcon={<OpenInNew />}
            href="https://docs.streamlit.io/library/api-reference"
            target="_blank"
            rel="noopener noreferrer"
          >
            Streamlit API Docs
          </Button>
          <Button
            variant="outlined"
            endIcon={<OpenInNew />}
            href="https://streamlit.io/gallery"
            target="_blank"
            rel="noopener noreferrer"
          >
            App Gallery (Inspiration)
          </Button>
        </Stack>
      </Paper>
    </GettingStartedLayout>
  )
}

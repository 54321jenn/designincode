import { Paper, Typography, Box, Divider } from '@mui/material'
import GettingStartedLayout, { CodeBlock } from '../getting-started/_GettingStartedLayout'

export default function CommandLine() {
  return (
    <GettingStartedLayout
      title="Command Line Basics"
      subtitle="Learn essential terminal commands for zsh and bash to navigate and work with files"
    >
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          What is the Command Line?
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          The command line (also called terminal or shell) is a text-based interface to your computer. Instead of
          clicking through folders, you type commands to navigate, create files, and run programs. Both zsh (default on
          newer Macs) and bash work similarly for basic commands.
        </Typography>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          How to Open the Terminal
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Before you can use the command line, you need to open a terminal. Here's how on different systems:
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
            On Mac
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li>
                Press{' '}
                <code
                  style={{
                    background: '#e0e0e0',
                    color: '#000',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontFamily: 'monospace',
                    fontSize: '0.9em',
                    fontWeight: 600,
                    border: '1px solid #b0b0b0',
                  }}
                >
                  Cmd + Space
                </code>{' '}
                to open Spotlight, then type "Terminal" and press Enter
              </li>
              <li>Or go to Applications → Utilities → Terminal</li>
              <li>
                Or use Finder: Press{' '}
                <code
                  style={{
                    background: '#e0e0e0',
                    color: '#000',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontFamily: 'monospace',
                    fontSize: '0.9em',
                    fontWeight: 600,
                    border: '1px solid #b0b0b0',
                  }}
                >
                  Cmd + Shift + U
                </code>
                , then double-click Terminal
              </li>
            </ul>
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
            On Windows
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li>
                Press{' '}
                <code
                  style={{
                    background: '#e0e0e0',
                    color: '#000',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontFamily: 'monospace',
                    fontSize: '0.9em',
                    fontWeight: 600,
                    border: '1px solid #b0b0b0',
                  }}
                >
                  Windows + R
                </code>
                , type{' '}
                <code
                  style={{
                    background: '#e0e0e0',
                    color: '#000',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontFamily: 'monospace',
                    fontSize: '0.9em',
                    fontWeight: 600,
                    border: '1px solid #b0b0b0',
                  }}
                >
                  cmd
                </code>
                , and press Enter (opens Command Prompt)
              </li>
              <li>
                Or press{' '}
                <code
                  style={{
                    background: '#e0e0e0',
                    color: '#000',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontFamily: 'monospace',
                    fontSize: '0.9em',
                    fontWeight: 600,
                    border: '1px solid #b0b0b0',
                  }}
                >
                  Windows + X
                </code>{' '}
                and select "Terminal" or "PowerShell"
              </li>
              <li>
                Or search for "Command Prompt" or "PowerShell" in the Start menu
              </li>
            </ul>
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
            In Cursor or VS Code
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li>
                Press{' '}
                <code
                  style={{
                    background: '#e0e0e0',
                    color: '#000',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontFamily: 'monospace',
                    fontSize: '0.9em',
                    fontWeight: 600,
                    border: '1px solid #b0b0b0',
                  }}
                >
                  Ctrl + `
                </code>{' '}
                (backtick, usually above Tab) to open the integrated terminal
              </li>
              <li>Or go to View → Terminal in the menu</li>
              <li>
                The terminal opens at the bottom of the editor and automatically navigates to your project folder
              </li>
            </ul>
          </Typography>
        </Box>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Navigation Commands
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          These commands help you move around your file system:
        </Typography>

        <CodeBlock
          label="See where you are"
          code={`pwd
# Prints the current directory path`}
        />

        <CodeBlock
          label="List files and folders"
          code={`ls          # List files in current directory
ls -l       # List with details (permissions, size, date)
ls -a       # List including hidden files (starting with .)`}
        />

        <CodeBlock
          label="Change directory"
          code={`cd folder-name        # Go into a folder
cd ..                # Go up one level (parent folder)
cd ~                 # Go to your home directory
cd /                 # Go to root directory`}
        />
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          File Operations
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Create, view, and manage files:
        </Typography>

        <CodeBlock
          label="Create files and folders"
          code={`mkdir my-folder       # Create a new folder
touch file.txt        # Create an empty file
touch file1.txt file2.txt  # Create multiple files`}
        />

        <CodeBlock
          label="View file contents"
          code={`cat file.txt          # Display entire file
head file.txt         # Show first 10 lines
tail file.txt         # Show last 10 lines
less file.txt         # View file page by page (press 'q' to quit)`}
        />

        <CodeBlock
          label="Copy, move, and delete"
          code={`cp file.txt copy.txt           # Copy a file
cp -r folder/ new-folder/    # Copy a folder (recursive)
mv file.txt new-name.txt     # Rename or move a file
rm file.txt                  # Delete a file (careful!)
rm -r folder/                # Delete a folder and contents`}
        />
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Useful Shortcuts & Tips
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>
              <strong>Tab completion:</strong> Type the first few letters of a file/folder name and press Tab to
              auto-complete
            </li>
            <li>
              <strong>Up arrow:</strong> Press ↑ to see previous commands you ran
            </li>
            <li>
              <strong>Clear screen:</strong> Type <code>clear</code> or press Cmd/Ctrl + L
            </li>
            <li>
              <strong>Cancel command:</strong> Press Cmd/Ctrl + C to stop a running command
            </li>
            <li>
              <strong>Multiple commands:</strong> Use <code>&&</code> to run commands in sequence:{' '}
              <code>cd my-folder && ls</code>
            </li>
          </ul>
        </Typography>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Common Workflows
        </Typography>

        <CodeBlock
          label="Create a new project folder"
          code={`mkdir my-project
cd my-project
touch README.md`}
        />

        <CodeBlock
          label="Navigate to a specific folder"
          code={`cd ~/Documents/my-folder
# Or use the full path:
cd /Users/yourname/Documents/my-folder`}
        />

        <CodeBlock
          label="Find a file"
          code={`find . -name "file.txt"     # Search in current directory
find ~ -name "*.js"          # Find all .js files in home directory`}
        />
      </Paper>

      <Paper sx={{ p: 2, bgcolor: 'warning.light', color: 'warning.contrastText' }}>
        <Typography variant="subtitle2" gutterBottom>
          ⚠️ Be Careful
        </Typography>
        <Typography variant="body2">
          Commands like <code>rm</code> (remove) are permanent. Always double-check what you're deleting. When in doubt,
          use <code>ls</code> first to see what's in a folder before deleting.
        </Typography>
      </Paper>
    </GettingStartedLayout>
  )
}


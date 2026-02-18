# Setting Up an OpenClaw Bot on a VPS (Beginner's Guide)
*A step-by-step guide for Mac users deploying to Hostinger VPS*

## What You'll Need

**Before we start:**
- A Mac computer
- A Hostinger VPS account (Virtual Private Server)
- An OpenClaw account and API keys
- About 1-2 hours of time
- Basic comfort with typing commands

**Think of a VPS like renting a computer in the cloud that runs 24/7, so your bot can always be online.**

---

## Step 1: Get Your VPS Ready

### 1.1 Order Your Hostinger VPS
1. Go to hostinger.com and sign up for a VPS plan
2. Choose **Ubuntu 22.04 LTS** as your operating system (this is like choosing what "brain" your cloud computer uses)
3. Pick the smallest plan to start (you can upgrade later)
4. Complete the purchase and wait for setup email (usually 10-30 minutes)

### 1.2 Get Your Connection Details
Hostinger will email you:
- **IP Address** (looks like: 123.456.789.012)
- **Username** (usually "root")
- **Password** (a long string of letters/numbers)

**Save these somewhere safe!**

---

## Step 2: Connect to Your VPS from Your Mac

### 2.1 Open Terminal
1. Press `Cmd + Space` to open Spotlight
2. Type "Terminal" and press Enter
3. A black window will open - this is your command center

### 2.2 Connect via SSH
Type this command (replace the IP with yours):
```bash
ssh root@123.456.789.012
```

**What just happened?** SSH is like a secure telephone line to your cloud computer.

You'll see a warning about authenticity - type `yes` and press Enter.
Then enter your password when asked (you won't see the letters as you type - that's normal for security).

**Success looks like:** Your terminal prompt changes to something like `root@vps123456:~#`

---

## Step 3: Prepare Your VPS

### 3.1 Update Your System
Copy and paste these commands one at a time:

```bash
apt update
```
```bash
apt upgrade -y
```

**What this does:** Like updating your iPhone, this gets the latest security patches and features.

### 3.2 Install Node.js (Required for OpenClaw)
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
```
```bash
apt install -y nodejs
```

**Check it worked:**
```bash
node --version
```
You should see something like `v20.x.x`

---

## Step 4: Install OpenClaw

### 4.1 Install OpenClaw Globally
```bash
npm install -g openclaw
```

**This might take 2-3 minutes.** You'll see lots of text scrolling - that's normal.

### 4.2 Verify Installation
```bash
openclaw --version
```

You should see the OpenClaw version number.

---

## Step 5: Get Your AI API Key

### 5.1 Get Claude API Key (Recommended)
1. **Go to Anthropic Console:** https://console.anthropic.com/
2. **Sign up** for an account if you don't have one
3. **Add billing:** You'll need to add a payment method (Claude charges per use)
4. **Create an API Key:**
   - Go to "API Keys" in the console
   - Click "Create Key"
   - Give it a name like "openclaw-bot"
   - Copy the key (starts with `sk-ant-`)
   
**⚠️ Important:** Save this key somewhere safe! You can't see it again once you close the window.

**Alternative:** You can also use OpenAI's GPT-4 (get key at https://platform.openai.com/api-keys)

---

## Step 6: Set Up Your Bot

### 6.1 Create a Directory for Your Bot
```bash
mkdir ~/my-openclaw-bot
cd ~/my-openclaw-bot
```

**What this does:** Makes a folder on your VPS called "my-openclaw-bot" and moves into it.

### 6.2 Initialize OpenClaw
```bash
openclaw init
```

Follow the prompts. You'll need:
- Your Claude API key (the one you just created)
- Choose your AI model (Claude Sonnet is a good choice)
- Set up messaging (Telegram is easiest for beginners)

### 6.3 Configure Your Bot
The setup will create a `config.json` file. Edit it to add your API key:
```bash
nano config.json
```

**Make sure your Claude API key is in there:**
```json
{
  "model": "anthropic/claude-sonnet-3.5",
  "anthropic": {
    "apiKey": "sk-ant-your-api-key-here"
  }
}
```

**Nano is like a simple text editor.** Use arrow keys to move around, make changes, then:
- Press `Ctrl + X` to exit
- Press `Y` to save changes
- Press `Enter` to confirm

---

## Step 7: Set Up Your Messaging Platform

### For Telegram (Recommended for beginners):

1. **Create a Telegram bot:**
   - Message @BotFather on Telegram
   - Send `/newbot`
   - Choose a name and username
   - Save the bot token (looks like: `123456789:ABCdefGHIjklMNOpqrSTUvwxYZ`)

2. **Add the token to your config:**
   ```bash
   nano config.json
   ```
   
   Find the telegram section and add your token:
   ```json
   "telegram": {
     "token": "your-bot-token-here"
   }
   ```

---

## Step 8: Start Your Bot

### 7.1 Test Run
```bash
openclaw start
```

**If everything works:** You'll see logs showing your bot connecting and being ready.

**To stop the test:** Press `Ctrl + C`

### 7.2 Run in Background (24/7)
Install PM2 (a process manager):
```bash
npm install -g pm2
```

Start your bot with PM2:
```bash
pm2 start "openclaw start" --name "my-bot"
```

**Make it start automatically if VPS restarts:**
```bash
pm2 startup
pm2 save
```

---

## Step 9: Test Your Bot

1. Open Telegram on your phone
2. Search for your bot's username
3. Start a chat with `/start`
4. Try asking it a question!

---

## Managing Your Bot

### Useful Commands:

**Check if your bot is running:**
```bash
pm2 status
```

**View bot logs:**
```bash
pm2 logs my-bot
```

**Restart your bot:**
```bash
pm2 restart my-bot
```

**Stop your bot:**
```bash
pm2 stop my-bot
```

**Connect to your VPS anytime:**
```bash
ssh root@your-vps-ip
```

---

## Troubleshooting

**"Connection refused" when trying to SSH:**
- Double-check your IP address
- Make sure your VPS is fully set up (check Hostinger email)

**Bot won't start:**
- Check your config.json for typos
- Make sure you have valid API keys
- Check logs with `pm2 logs my-bot`

**"Permission denied":**
- Make sure you're using the right username (usually "root")
- Double-check your password

**Bot responds slowly:**
- This is normal - AI responses take a few seconds
- Check your VPS plan - upgrading might help

---

## Security Tips

1. **Change your root password:**
   ```bash
   passwd
   ```

2. **Set up a firewall:**
   ```bash
   ufw enable
   ufw allow ssh
   ```

3. **Keep your system updated:**
   ```bash
   apt update && apt upgrade -y
   ```

---

## Getting Help

- **OpenClaw Documentation:** https://docs.openclaw.ai
- **OpenClaw Discord:** https://discord.com/invite/clawd
- **Hostinger Support:** For VPS issues
- **Your bot logs:** `pm2 logs my-bot` shows what's happening

---

## Summary

🎉 **Congratulations!** You now have an OpenClaw bot running 24/7 in the cloud!

**What you accomplished:**
- Set up a VPS (your own cloud computer)
- Installed and configured OpenClaw
- Connected it to Telegram
- Made it run automatically

**Your bot can now:**
- Answer questions
- Help with tasks
- Run continuously without your computer being on
- Be accessed from anywhere via Telegram

**Next steps:** Explore OpenClaw's features, add more messaging platforms, or customize your bot's personality in the workspace files!

---

*Need help? Don't hesitate to ask in the OpenClaw Discord community - everyone was a beginner once! 🚀*
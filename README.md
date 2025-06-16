# kaaaichi Profile

A simple npx command to display kaaaichi's profile information in the terminal.

## Usage

```bash
npx kaaaichi
```

## Features

- 🎨 Beautiful card-style display with borders
- 🌈 Colorful terminal output
- 📱 Social media links
- 🏢 Professional information
- 🎙️ Podcast information

## Display Information

- Name
- Company & Role
- GitHub profile
- Twitter/X account
- Instagram account
- Podcast channel

## Development

### Prerequisites

- Node.js (v12 or higher)
- npm

### Local Development

```bash
# Clone the repository
git clone https://github.com/kaaaichi/npx_my_profile.git
cd npx_my_profile

# Install dependencies
npm install

# Run locally
node index.js
```

### Publishing

```bash
# Login to npm
npm login

# Publish to npm
npm publish
```

## Automated Issue Fixing

This repository includes GitHub Actions workflows that can automatically create pull requests to fix issues:

### How to Use Automated Fix

1. **Create an issue** describing the problem or feature request
2. **Add a label** to trigger the automated fix:
   - `auto-fix` - Basic automated fix
   - `claude-fix` - Advanced AI-powered fix using Claude AI patterns

3. **The workflow will:**
   - Analyze the issue title and description
   - Create a new branch for the fix
   - Apply appropriate code changes
   - Create a pull request with the fix
   - Comment on the original issue with the PR link

### Supported Fix Types

- **Profile updates** - Modifications to profile data
- **Display issues** - Layout and formatting fixes  
- **Color changes** - Color scheme adjustments
- **Width adjustments** - Card width modifications
- **General improvements** - Documentation and code enhancements

### Manual Trigger

You can also manually trigger the Claude AI fix workflow:

1. Go to Actions tab in GitHub
2. Select "Claude AI Fix" workflow
3. Click "Run workflow"
4. Enter the issue number
5. The workflow will process the issue and create a PR

### Example Usage

```
Issue Title: "Change card width to 100 characters"
Label: claude-fix
Result: Automatic PR updating cardWidth in index.js
```

### Setup for Full Automation (Optional)

For automatic PR creation, you can set up a Personal Access Token:

1. **Create a Personal Access Token**:
   - Go to GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
   - Click "Generate new token"
   - Select scopes: `repo`, `workflow`
   - Copy the generated token

2. **Add as Repository Secret**:
   - Go to your repository Settings > Secrets and variables > Actions
   - Click "New repository secret"
   - Name: `PAT_TOKEN`
   - Value: [paste your token]

3. **Benefits**:
   - Automatic PR creation instead of just branch creation
   - Full automation without manual intervention

## License

MIT

## Author

kaaaichi - [GitHub](https://github.com/kaaaichi)
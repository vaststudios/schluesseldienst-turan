# GitHub CLI Setup Guide

## ✅ Installation Complete

GitHub CLI (`gh`) has been successfully installed!

**Version**: 2.83.1

## 🔐 Authentication

To use GitHub CLI, you need to authenticate:

```bash
gh auth login
```

This will:
1. Prompt you to choose GitHub.com or GitHub Enterprise
2. Choose authentication method (browser or token)
3. Open browser to authenticate
4. Complete authentication

## 📋 Common GitHub CLI Commands

### Authentication
```bash
gh auth login          # Login to GitHub
gh auth status         # Check authentication status
gh auth logout         # Logout
```

### Repository Management
```bash
gh repo view           # View current repository
gh repo clone <repo>   # Clone a repository
gh repo create         # Create a new repository
gh repo fork <repo>    # Fork a repository
```

### Pull Requests
```bash
gh pr list             # List pull requests
gh pr create           # Create a pull request
gh pr view <number>    # View a pull request
gh pr checkout <number> # Checkout a PR branch
```

### Issues
```bash
gh issue list          # List issues
gh issue create        # Create an issue
gh issue view <number> # View an issue
```

### Workflow
```bash
gh workflow list       # List workflows
gh workflow run <name> # Run a workflow
gh run list            # List workflow runs
```

### Releases
```bash
gh release list        # List releases
gh release create      # Create a release
```

## 🚀 Quick Start

1. **Authenticate**:
   ```bash
   gh auth login
   ```

2. **Check your current repo**:
   ```bash
   gh repo view
   ```

3. **View your pull requests**:
   ```bash
   gh pr list
   ```

## 🔗 Integration with Vercel

Since your GitHub repo is connected to Vercel:
- Every `git push` will trigger automatic Vercel deployments
- You can use `gh` to manage your GitHub workflow
- PRs will automatically get preview deployments

## 📚 Documentation

Full documentation: https://cli.github.com/manual/


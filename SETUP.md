# Setup Instructions

## Initial Setup

1. **Create GitHub Repository**
   ```bash
   cd /Users/tomasz.morawski/cursor-rules
   git init
   git add .
   git commit -m "Initial commit: Cursor rules package"
   gh repo create cursor-rules --public --source=. --remote=origin
   # Or manually: git remote add origin https://github.com/jellyfish-tom/cursor-rules.git
   git push -u origin main
   ```

2. **Publish to npm**
   ```bash
   npm login
   npm publish --access public
   ```

## Using in Projects

1. **Install the package**
   ```bash
   npm install --save-dev @tomasz-morawski/cursor-rules
   ```

2. **Verify installation**
   ```bash
   ls -la .cursor
   ```

The `.cursor` directory should be automatically created in your project root.

## Updating Rules

1. **Make changes** to rules in this repository
2. **Commit and push** to GitHub
3. **Publish new version** to npm:
   ```bash
   npm version patch  # or minor, major
   npm publish
   ```
4. **Update in projects**:
   ```bash
   npm update @tomasz-morawski/cursor-rules
   ```

## Local Development

To test locally without publishing:

```bash
# In cursor-rules directory
npm link

# In your project
npm link @tomasz-morawski/cursor-rules
```


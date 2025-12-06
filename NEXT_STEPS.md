# Next Steps

## ✅ What's Been Created

1. **Package Structure** at `/Users/tomasz.morawski/cursor-rules/`
   - `.cursor/` - All your cursor rules and commands
   - `scripts/install.js` - Postinstall script that copies rules to project root
   - `package.json` - npm package configuration
   - `README.md` - Usage documentation
   - `SETUP.md` - Setup instructions
   - `LICENSE` - MIT license

## 🚀 Quick Start

### 1. Initialize Git Repository

```bash
cd /Users/tomasz.morawski/cursor-rules
git init
git add .
git commit -m "Initial commit: Cursor rules package"
```

### 2. Create GitHub Repository

```bash
# Using GitHub CLI (if installed)
gh repo create cursor-rules --public --source=. --remote=origin

# Or manually create on GitHub and then:
git remote add origin https://github.com/jellyfish-tom/cursor-rules.git
git branch -M main
git push -u origin main
```

### 3. Update package.json Repository URL

Edit `package.json` and update the repository URL to match your actual GitHub username/repo:

```json
"repository": {
  "type": "git",
   "url": "git+https://github.com/jellyfish-tom/cursor-rules.git"
}
```

### 4. Publish to npm

```bash
# Login to npm (first time only)
npm login

# Publish the package
npm publish --access public
```

**Note:** The package name uses your npm username scope `@jellyfish-tom`, which allows you to publish scoped packages without creating an organization.

### 5. Use in Your Projects

```bash
# In any project
npm install --save-dev @jellyfish-tom/cursor-rules
```

The `.cursor` directory will be automatically created in your project root.

## 📝 Updating Rules

1. Make changes to rules in this repository
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update cursor rules"
   git push
   ```
3. Publish new version:
   ```bash
   npm version patch  # or minor, major
   npm publish
   ```
4. Update in projects:
   ```bash
   npm update @jellyfish-tom/cursor-rules
   ```

## 🧪 Testing Locally

Before publishing, test locally:

```bash
# In cursor-rules directory
npm link

# In your project
npm link @jellyfish-tom/cursor-rules
```

## 📦 Package Details

- **Name**: `@jellyfish-tom/cursor-rules`
- **Version**: `1.0.0`
- **License**: MIT
- **Postinstall**: Automatically copies `.cursor` to project root

## ⚠️ Important Notes

1. **Scoped Package**: Uses your npm username scope `@jellyfish-tom` - no organization needed
2. **File Conflicts**: The install script will overwrite existing files in `.cursor/` - make sure to backup any project-specific rules
3. **Git Ignore**: Consider adding `.cursor/` to your project's `.gitignore` if you want it managed only by npm


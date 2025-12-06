# Cursor Rules

Shared Cursor IDE rules and guidelines for TypeScript/React projects.

## Installation

```bash
npm install --save-dev @jellyfish-tom/cursor-rules
```

The package automatically copies the `.cursor` directory to your project root after installation via the `postinstall` script.

## Usage

After installation, the `.cursor` directory is available in your project root with all rules and commands. Cursor IDE automatically picks up these rules.

## Updating Rules

To update the rules in all projects:

1. Update the rules in this repository
2. Publish a new version to npm
3. Run `npm update @jellyfish-tom/cursor-rules` in your projects

## Manual Installation

If you need to manually copy the rules:

```bash
cp -r node_modules/@jellyfish-tom/cursor-rules/.cursor ./
```

## Contents

- **Rules**: TypeScript, React, coding guidelines, refactoring patterns, and more
- **Commands**: Custom Cursor commands

## Development

To test locally:

```bash
npm link
cd /path/to/your/project
npm link @jellyfish-tom/cursor-rules
```


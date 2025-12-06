#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', '.cursor');
const targetDir = path.join(process.cwd(), '.cursor');

function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      if (fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}

try {
  if (!fs.existsSync(sourceDir)) {
    console.warn('⚠️  .cursor directory not found in package');
    process.exit(0);
  }

  if (fs.existsSync(targetDir)) {
    const stats = fs.statSync(targetDir);
    if (!stats.isDirectory()) {
      console.error('❌ .cursor exists but is not a directory');
      process.exit(1);
    }
  }

  copyDirectory(sourceDir, targetDir);
  console.log('✅ Cursor rules installed successfully to .cursor/');
} catch (error) {
  console.error('❌ Error installing cursor rules:', error.message);
  process.exit(1);
}


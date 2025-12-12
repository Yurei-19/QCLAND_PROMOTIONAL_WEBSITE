const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexHtml = path.join(distDir, 'index.html');
const notFoundHtml = path.join(distDir, '404.html');
const noJekyll = path.join(distDir, '.nojekyll');

try {
  if (fs.existsSync(indexHtml)) {
    fs.copyFileSync(indexHtml, notFoundHtml);
  }
  if (!fs.existsSync(noJekyll)) {
    fs.writeFileSync(noJekyll, '');
  }
  console.log('Postbuild: 404.html and .nojekyll prepared.');
} catch (err) {
  console.error('Postbuild step failed:', err);
  process.exit(1);
}

import { build } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Build the frontend as a static site
await build({
  root: join(__dirname, 'client'),
  build: {
    outDir: join(__dirname, 'docs'),
    emptyOutDir: true,
  },
  base: '/japanese-number-game/',
});

console.log('Static build complete! Ready for GitHub Pages.');
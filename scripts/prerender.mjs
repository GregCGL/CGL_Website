import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../.ssr/App.js';

const outputPath = resolve('public-site/index.html');
const html = readFileSync(outputPath, 'utf8');
const appHtml = renderToString(React.createElement(App));

if (!html.includes('<div id="root"></div>')) {
  throw new Error('Expected empty root element was not found in public-site/index.html');
}

writeFileSync(outputPath, html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`));
console.log(`Prerendered ${appHtml.length} characters of crawlable HTML into public-site/index.html`);

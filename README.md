# Entur-Jul
Website that shows countdown until Christmas

## Development
```bash
npm install
npm run dev
```

## Building
```bash
npm run build
```

## GitHub Pages Deployment

### For repository URL (github.io/Entur-Jul)
The current configuration is set up for deployment to `https://username.github.io/Entur-Jul/`.
Build and deploy as-is.

### For custom domain (jul.sturle.dev)
If you're using a custom domain, update `vite.config.js`:
```js
base: '/'  // Change from '/Entur-Jul/' to '/'
```

The CNAME file in the `public` folder will be automatically included in the build.
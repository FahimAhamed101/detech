# Deploying On Webuzo

This app is ready to run as a production Next.js app on a Webuzo Node.js application.

## Recommended Server Setup

Use these values in `Applications -> Add Applications -> node`:

- Application type: `Node.js 22`
- Deployment environment: `Production`
- Application path: your project folder, for example `/home/extremis/git/extremis/package/detech`
- Application startup file: `server.js`
- Start command: `npm run start:webuzo`
- Stop command: `kill -9 $PID`
- Port: any free internal port, for example `3000` or the one Webuzo assigns
- Deployment domain: your site domain or subdomain
- Base application URL: `/`

## First-Time Deploy Steps

1. Upload or clone the project to the server.
2. Open Terminal/SSH in the project folder:

```bash
cd /home/extremis/git/extremis/package/detech
```

3. Install dependencies:

```bash
npm install
```

4. Create your environment file:

```bash
cp .env.example .env
```

5. Build the production app:

```bash
npm run build
```

This build now also copies `public/` and `.next/static/` into the standalone
runtime automatically, which is required for CSS, JS, fonts, and images to load.

6. In Webuzo, create the Node app with:

```text
Startup file: server.js
Start command: npm run start:webuzo
```

7. Add environment variables in Webuzo:

```text
NODE_ENV=production
PORT=3000
HOST=0.0.0.0
```

Use the same port value in both Webuzo's port field and the `PORT` environment variable.

## Updating The Site

Whenever you change the code:

```bash
cd /home/extremis/git/extremis/package/detech
npm install
npm run build
```

Then restart the app from Webuzo.

## Domain Notes

- Point your domain or subdomain to the Node application in Webuzo.
- Enable SSL from Webuzo after the domain is connected.
- If the root domain is already used elsewhere, deploy this app on a subdomain like `app.extremis.top`.

## Troubleshooting

- If the site shows `502` or `Application Error`, rebuild with `npm run build` and restart the app.
- If Webuzo says the port is busy, choose another free port like `3001` or `3010`.
- If CSS/images look broken, make sure the app is deployed from the project root `package/detech`, not the repo root.
- If the app starts but shows old content, rebuild and restart again.

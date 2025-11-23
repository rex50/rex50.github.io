# Running the Portfolio Locally

Due to browser security restrictions (CORS), you need to serve the files via HTTP rather than opening index.html directly.

## Option 1: Python HTTP Server (Recommended)
```bash
# Navigate to the project directory
cd f:\Android\rex50.github.io

# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

## Option 2: Node.js HTTP Server
```bash
# Install http-server globally (one time)
npm install -g http-server

# Run server
cd f:\Android\rex50.github.io
http-server -p 8000

# Then open: http://localhost:8000
```

## Option 3: PHP Server
```bash
cd f:\Android\rex50.github.io
php -S localhost:8000

# Then open: http://localhost:8000
```

## What was added:
- `loadContent()` function in `main.js` that fetches data from `data.json`
- Populates all sections: Hero, About, Experience, Skills, Projects, Blog, Contact
- Updates navbar text to match section titles (e.g., "System Info", "Execution Logs")
- Re-initializes animations after content loads

The content will load dynamically when you access the site via HTTP server.

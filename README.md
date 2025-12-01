# Azeroth Tour Guide - Project Plan

The idea is to build a full-stack web application with Python (Flask) and React, eventually Dockerize it, deploy it with Docker and Kubernetes, and automate via GitHub Actions CI/CD. This project aims to serve as a portfolio piece to showcase skills in Python development, modern DevOps practices, and secure, scalable web application design.

## Project Overview

Azeroth Tour Guide will be a vacation planning website for the Warcraft universe. Explore an interactive map of Azeroth, browse detailed location listings, and search for your next adventure in Kalimdor or the Eastern Kingdoms.

## Tech Stack

- **Backend**: Python Flask
- **Frontend**: React
- **Database**: JSON (scraped from [Warcraft Wiki](https://warcraft.wiki.gg)), planning MySQL or PostgreSQL
- **Containerization**: Docker
- **Orchestration**: Kubernetes (HomeLab)
- **CI/CD**: GitHub Actions
- **Cloud**: AWS (if budget allows)

## Current Status

- None. Basic backend setup.

## MVP Features (Bare Essentials)

- **Interactive Map**

  - _STATIC_: Start with an SVG of Azeroth. Kalimdor, Eastern Kingdoms.
  - _NEXT_: Clickable regions that link to location details.
  - _NEXT_: Dynamic map with highlights.
  - _NEXT_: Add in new zones.

- **Location Listings**

  - _STATIC_: Hardcoded list. Orgrimmar, Stormwind, etc.
  - _NEXT_: Add descriptions, maybe pull some lore from WoWpedia.
  - _NEXT_: Toss in screenshots from WoW for images.

- **Search Functionality**
  - _STATIC_: A search bar that just sits there for now.
  - _NEXT_: Filter locations based on what’s typed.
  - _NEXT_: Highlight matches on the dynamic map.

## Development Steps

1. **Scope MVP**

   - Static map, simple location list, and a barebones search.

2. **Frontend**

   - Use **React** for the frontend.
   - Ensure mobile-responsive design.

3. **Frontend Testing**

   - Chrome, Firefox, Android/IPhone browser testing, see what breaks. Ask friends for feedback?

4. **Backend**

   - Use **Python** for the server.
   - Start with **MySQL** for the database.
   - Build a REST API to feed the frontend.

5. **Integration**

   - Fetch API data to replace static content.

6. **Backend Testing**

   - Write some unit tests for the API.

7. **Deploy**
   - Dockerize it and deploy on HomeLab Kubernetes first.
   - Add monitoring.

## Future Features

- **Core Ideas**: Themed trips like “Undead Graveyard Tour” or “Dwarven Pub Crawl.” Inn and tavern recs. Maybe a fake booking system?
- **UX**: Logins, custom recs, sharing, maybe Darkmoon Faire event alerts.
- **Fake Cash Flow?**: No clue yet. Fake premium tiers? Warcraft gold donations?

## Setup and Installation

### Prerequisites

- Python 3.x
- Node.js 18 or higher (for React)
- Docker (eventually)
- Kubernetes CLI (eventually)
- MySQL (eventually)

### Local Development

These steps assume WSL but should be very similar on any Unix OS.

1. **Clone the Repo**

   ```bash
   git clone https://github.com/yourusername/azeroth-tour-guide.git
   cd azeroth-tour-guide
   ```

2. **Backend Setup**

   - Go to backend: `cd backend`
   - Create venv: `python3 -m venv venv`
   - Activate: `source venv/bin/activate`
   - Install deps: `pip install -r requirements`
   - Run: `python3 run.py` (starts the server)

3. **Frontend Setup**

   - Go to frontend: `cd frontend`
   - Install deps: `npm install`
   - Build static files that backend serves: `nothing yet`

4. **Database**
   - Right now, I’m using a JSON with scraped data from [https://warcraft.wiki.gg](https://warcraft.wiki.gg).
   - Eventually... Set up MySQL (then PostgreSQL?) and update the backend config.
   - Tweak the backend config with the connection string (like mysql://user:password@localhost:3306/azeroth_db).

### Deployment

To be continued...

## License

MIT License.

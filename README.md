# Azeroth Tour Guide - Project Plan

As of writing, the idea is to build a full-stack web application with Python and React, eventually Dockerize it, deploy it with Docker and Kubernetes, and automate via GitHub Actions CI/CD. This project aims to serve as a portfolio piece to showcase skills in Python development, modern DevOps practices, and secure, scalable web application design. Original plan was to do it in Rust, and I may eventually re-write bits and pieces to that, but Rust full-stack is a bit too much.

## Project Overview

Azeroth Tour Guide will be a vacation planning website for the Warcraft universe. Explore an interactive map of Azeroth, browse detailed location listings, and search for your next adventure in Kalimdor or the Eastern Kingdoms. This project demonstrates a complete development lifecycle—from initial design to production deployment—while emphasizing Python proficiency and industry-standard infrastructure practices.

## Tech Stack

- **Backend**: Python 3.12 with Flask
- **Frontend**: React with Tailwind CSS
- **Database**: JSON (scraped from [Warcraft Wiki](https://warcraft.wiki.gg)), planning MySQL or PostgreSQL
- **Containerization**: Docker
- **Orchestration**: Kubernetes (HomeLab, then AWS EKS)
- **CI/CD**: GitHub Actions
- **Cloud**: AWS (if budget allows)

## Current Status

- **Done**: Static map, region pages with descriptions and screenshots, random region button, basic backend test.
- **Next**: Interactive map, full search, database switch, more tests, deployment.

## MVP Features (Bare Essentials)

- **Interactive Map**

  - _STATIC_: Start with an SVG of Azeroth. Kalimdor, Eastern Kingdoms, the classics. _Implemented via static PNG_
  - _NEXT_: Clickable regions that link to location details.
  - _NEXT_: Dynamic map with highlights.
  - _NEXT_: Add in new zones? I hear the Dragon Isles are nice this time of year.

- **Location Listings**

  - _STATIC_: Hardcoded list. Think Orgrimmar, Stormwind, etc. _Implemented via Region pages (e.g. `/The&20Barrens`)_
  - _NEXT_: Add descriptions, maybe pull some lore from WoWpedia. _Partially implemented through region pages with description and faction info_
  - _NEXT_: Toss in screenshots from WoW for images. _Partially implemented through placeholders; API will serve real WoW shots later._

- **Search Functionality**
  - _STATIC_: A search bar that just sits there for now. _Partially immplemented through random region button, full search bar up next!_
  - _NEXT_: Filter locations based on what’s typed.
  - _NEXT_: Highlight matches on the dynamic map.

## Development Steps

1. **Scope MVP**

   - Static map, simple location list, and a barebones search. Keep it small to start.

2. **Frontend**

   - Use **React** for the frontend. _(Done pages for home, Azeroth, contact, and regions)_
   - Ensure mobile-responsive design so it doesn’t suck on my phone. _(Header has a mobile menu)_

3. **Frontend Testing**

   - Throw it at Chrome, Firefox, maybe my phone, see what breaks. Ask friends for feedback.

4. **Backend**

   - Use **Python with Flask** for the server. _(Done—API serves region data!)_
   - Start with **MySQL** for the database. _(Still using JSON for now. MySQL/PostgreSQL planned.)_
   - Build a REST API to feed the frontend. _(Done—endpoints for regions are working!)_

5. **Integration**

   - Fetch API data to replace static content. _(Done—region pages fetch from the API!)_

6. **Backend Testing**

   - Write some `pytest` unit tests for the API. _Basic tests started, more to come._
   - Smash frontend and backend together, pray it works.

7. **Deploy**
   - Dockerize it and deploy on HomeLab Kubernetes first.
   - Add monitoring so I know if it dies in the middle of the night.

## Future Features

- **Core Ideas**: Themed trips like “Undead Road Trip” or “Dwarven Ale Crawl.” Inn and tavern recs. Maybe a fake booking system?
- **UX**: Logins, custom recs, sharing, maybe Darkmoon Faire event alerts.
- **Cash Flow?**: No clue yet—ads? Fake premium tiers? Warcraft gold donations?

## Setup and Installation

### Prerequisites

- Python 3.12 (or higher)
- Node.js 18.x (for React)
- Tailwind CSS (for styling the frontend)
- Poetry (for Python dependency management)
- Docker
- Kubernetes CLI
- MySQL (eventually)

### Local Development

These steps assume Windows, I will create Linux steps at some point (but you probably know how to translate already).

1. **Clone the Repo**

   ```bash
   git clone https://github.com/yourusername/azeroth-tour-guide.git
   cd azeroth-tour-guide
   ```

2. **Backend Setup**

   - Go to backend: `cd backend`
   - Install deps: `poetry install`
   - Run Flask: `poetry run python run.py` (starts the server)

3. **Frontend Setup**

   - Go to frontend: `cd frontend`
   - Install deps: `npm install`
   - Generate Tailwind: `npm run gen-tailwind` (this runs with --watch for dev purposes right now, will change so it runs once when final product is ready)
   - Build static files that Flask serves: `npx vite build`

4. **Database**
   - Right now, I’m using a JSON with scraped data from [https://warcraft.wiki.gg](https://warcraft.wiki.gg). _(Done!)_
   - Eventually... Set up MySQL (then PostgreSQL) and update the backend config.
   - Tweak the backend config with the connection string (like mysql://user:password@localhost:3306/azeroth_db).

### Testing

- Backend Tests: `cd backend && poetry run pytest`
  - This is currently just one test that makes sure `app is not None`.
- Frontend Tests: Planned with Jest? Or maybe Vitest since I used Vite.

### Deployment

To be continued...

## License

MIT License—do whatever, just don’t sue me.

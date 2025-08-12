# Azeroth Tour Guide - Project Plan

As of writing, the idea is to build a full-stack web application with Java (Spring Boot) and React, eventually Dockerize it, deploy it with Docker and Kubernetes, and automate via GitHub Actions CI/CD. This project aims to serve as a portfolio piece to showcase skills in Java development, modern DevOps practices, and secure, scalable web application design. Original plan was to do it in Rust, and I may eventually re-write bits and pieces to that, but Rust full-stack is a bit too much. I may try to incorporate some Go as well, as I've been enjoying playing with that. 

## Project Overview

Azeroth Tour Guide will be a vacation planning website for the Warcraft universe. Explore an interactive map of Azeroth, browse detailed location listings, and search for your next adventure in Kalimdor or the Eastern Kingdoms. This project demonstrates a complete development lifecycle, from initial design to production deployment, while emphasizing Java proficiency and industry-standard infrastructure practices.

## Tech Stack

- **Backend**: Java Spring Boot
- **Frontend**: React 
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

  - _STATIC_: Start with an SVG of Azeroth. Kalimdor, Eastern Kingdoms.
  - _NEXT_: Clickable regions that link to location details.
  - _NEXT_: Dynamic map with highlights.
  - _NEXT_: Add in new zones? I hear the Dragon Isles are nice this time of year.

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

   - Static map, simple location list, and a barebones search. Keep it small to start.

2. **Frontend**

   - Use **React** for the frontend.
   - Ensure mobile-responsive design so it doesn’t suck on my phone.

3. **Frontend Testing**

   - Throw it at Chrome, Firefox, maybe my phone, see what breaks. Ask friends for feedback.

4. **Backend**

   - Use **Java Spring Boot** for the server. 
   - Start with **MySQL** for the database.
   - Build a REST API to feed the frontend. 

5. **Integration**

   - Fetch API data to replace static content. 

6. **Backend Testing**

   - Write some unit tests for the API.
   - Smash frontend and backend together, pray it works.

7. **Deploy**
   - Dockerize it and deploy on HomeLab Kubernetes first.
   - Add monitoring so I know if it dies in the middle of the night.

## Future Features

- **Core Ideas**: Themed trips like “Undead Road Trip” or “Dwarven Ale Crawl.” Inn and tavern recs. Maybe a fake booking system?
- **UX**: Logins, custom recs, sharing, maybe Darkmoon Faire event alerts.
- **Fake Cash Flow?**: No clue yet. Fake premium tiers? Warcraft gold donations?

## Setup and Installation

### Prerequisites

- Java version tbd
- Node.js 18 or higher (for React)
- Docker (eventually)
- Kubernetes CLI (eventually)
- MySQL (eventually)

### ⚠️ WSL Users (Windows Subsystem for Linux)

If running in WSL, ensure:

- You have installed Node.js inside WSL (not using the Windows version).
- `npm` and `tsc` are running from WSL (`which node` should not point to `/mnt/c/`).
- Run `npm install` **inside WSL** before running `npm run build`.

### Local Development

These steps assume WSL but should be very similar on any Unix OS. 

1. **Clone the Repo**

   ```bash
   git clone https://github.com/yourusername/azeroth-tour-guide.git
   cd azeroth-tour-guide
   ```

2. **Backend Setup**

   - Go to backend: `cd backend`
   - Install deps: ``
   - Run: `` (starts the server)

3. **Frontend Setup**

   - Go to frontend: `cd frontend`
   - Install deps: `npm install`
   - Build static files that backend serves: `npx vite build`

4. **Database**
   - Right now, I’m using a JSON with scraped data from [https://warcraft.wiki.gg](https://warcraft.wiki.gg). 
   - Eventually... Set up MySQL (then PostgreSQL?) and update the backend config.
   - Tweak the backend config with the connection string (like mysql://user:password@localhost:3306/azeroth_db).

### Deployment

To be continued...

## License

MIT License. Do whatever, just don’t sue me.

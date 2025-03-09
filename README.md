# Azeroth Tour Guide - Project Plan

As of writing, the idea is to build full-stack web application built with Python and React, eventually Dockerize it, deploy it with Docker and Kubernetes, and automate via GitHub Actions CI/CD. This project aims to serve as a portfolio piece to showcase skills in Python development, modern DevOps practices, and secure, scalable web application design. Original plan was to do it in Rust, and I may eventually re-write bits and pieces to that, but Rust full-stack is a bit too much. 

## Project Overview

Azeroth Tour Guide will be a vacation planning website for the Warcraft universe. Explore an interactive map of Azeroth, browse detailed location listings, and search for your next adventure in Kalimdor or the Eastern Kingdoms. This project demonstrates a complete development lifecycle—from initial design to production deployment—while emphasizing Python proficiency and industry-standard infrastructure practices.

## Tech Stack

- **Backend**: Python with Flask (lightweight, Python-y goodness)
- **Frontend**: React (for that slick, interactive vibe)
- **Database**: Start with MySQL, move to PostgreSQL when I feel like it
- **Containerization**: Docker (because containers are cool)
- **Orchestration**: Kubernetes on HomeLab, then AWS EKS if money allows
- **CI/CD**: GitHub Actions (automate all the things)
- **Cloud**: AWS if money allows (flexible hosting for Python apps)

## MVP Features (Bare Essentials)

- **Interactive Map**  
  - *STATIC*: Start with an SVG of Azeroth. Kalimdor, Eastern Kingdoms, the classics.  
  - *NEXT*: Clickable regions that link to location details.  
  - *NEXT*: Dynamic map with highlights.  
  - *NEXT*: Add in new zones? I hear the Dragon Isles are nice this time of year. 

- **Location Listings**  
  - *STATIC*: Hardcoded list. Think Orgrimmar, Stormwind, etc.  
  - *NEXT*: Add descriptions, maybe pull some lore from WoWpedia.  
  - *NEXT*: Toss in screenshots from WoW for images.  

- **Search Functionality**  
  - *STATIC*: A search bar that just sits there for now.  
  - *NEXT*: Filter locations based on what’s typed.  
  - *NEXT*: Highlight matches on the dynamic map.

## Development Steps

1. **Scope MVP**  
   - Static map, simple location list, and a barebones search. Keep it small to start.  

2. **Frontend**  
   - Use **React** for the frontend.  
   - Ensure mobile-responsive design so it doesn’t suck on my phone.  

3. **Frontend Testing**  
   - Throw it at Chrome, Firefox, maybe my phone—see what breaks. Ask friends for feedback.  

4. **Backend**  
   - Use **Python with Flask** for the server (no Rust servers like Actix or Rocket, keeping it Python).  
   - Start with **MySQL** for the database (relational, not MongoDB—still deciding if PostgreSQL later).  
   - Build a REST API to feed the frontend some sweet, sweet data.  

5. **Integration**  
   - Fetch API data to replace static content. Make it dynamic, baby.  

6. **Backend Testing**  
   - Write some `pytest` unit tests for the API (no `cargo test` since we’re not in Rust-land).  
   - Smash frontend and backend together, pray it works.  

7. **Deploy**  
   - Dockerize it and deploy on HomeLab Kubernetes first (AWS later if I’m rich).  
   - Add monitoring so I know if it dies in the middle of the night.  

## Future Features

- **Core Ideas**: Themed trips like “Undead Road Trip” or “Dwarven Ale Crawl.” Inn and tavern recs. Maybe a fake booking system?  
- **UX**: Logins, custom recs, sharing, maybe Darkmoon Faire event alerts.  
- **Cash Flow?**: No clue yet—ads? Fake premium tiers? Warcraft gold donations?

# Setup and Installation

### Prerequisites
- Python 3.x
- Node.js (for React)
- Docker
- Kubernetes CLI
- MySQL

### Local Development

1. **Clone the Repo**  
   ```bash
   git clone https://github.com/yourusername/azeroth-tour-guide.git
   cd azeroth-tour-guide
   ```

2. **Backend Setup**  
   - Install deps: `pip install -r requirements.txt`
   - Run Flask: `python app.py`

3. **Frontend Setup**  
   - Go to frontend: `cd frontend`
   - Install deps: `npm install`
   - Start React: `npm start`

4. **Database**  
   - Set up MySQL locally or somewhere else.
   - Tweak the backend config with the connection string (like mysql://user:password@localhost:3306/azeroth_db).

### Deployment

To be continued... 

## License

MIT License—do whatever, just don’t sue me.


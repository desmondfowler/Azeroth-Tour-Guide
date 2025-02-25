# Azeroth Tour Guide - Project Plan

**Concept**: I’m building a vacation guide website for the Warcraft universe. My goal is to use this project to dive headfirst into Rust, make a full-stack app, and eventually figure out GitHub Actions for CI/CD.

## MVP Features (Bare Essentials)
- **Interactive Map**  
  - STATIC: Start with an SVG of Azeroth—Kalimdor, Eastern Kingdoms, the classics.  
  - NEXT: Clickable regions that link to location details.  
  - NEXT: Dynamic map with highlights, Rust-style. 
- **Location Listings**  
  - STATIC: Hardcoded list—think Orgrimmar, Stormwind, etc.  
  - NEXT: Add descriptions, maybe pull some lore from WoWpedia.  
  - NEXT: Toss in screenshots from WoW for images. 
- **Search Functionality**  
  - STATIC: A search bar that just sits there for now.  
  - NEXT: Filter locations based on what’s typed.  
  - NEXT: Highlight matches on the dynamic map. 

## Development Steps
1. **Scope MVP**  
   - Static map, simple location list, and a barebones search. Keep it small to start.  
2. **UI Mockup**  
   - Doodle it on paper (or Figma if I’m feeling fancy).   
3. **Front End**  
   - Use some sort of `Rust` framework for frontend. `Yew` or `Dioxus`?  
   - Ensure mobile-responsive design.  
4. **Front End Testing**  
   - Throw it at Chrome, Firefox, maybe my phone—see what breaks. Ask friends for feedback.  
5. **Back End**  
   - Some sort of `Rust` server. Initial research pulls up `Actix` or `Rocket`?
   - SQLite or PGSQL? MySQL? Want a relational, not something like MongoDB  
   - REST API?
6. **Integration**  
   - Fetch API data to replace static content.  
7. **Back End Testing**  
   - Write some `cargo test` unit tests for the API. 
   - Smash frontend and backend together, pray it works.  
8. **Deploy**  
   - Deploy on `Rust`-friendly host. Add monitoring so I know if it dies.

## Future Features
- **Core Ideas**: Themed trips like “Undead Road Trip” or “Dwarven Ale Crawl.” Inn and tavern recs. Maybe a fake booking system?  
- **UX**: Logins, custom recs, sharing, maybe Darkmoon Faire event alerts.  
- **Cash Flow?**: No clue yet—ads? Fake premium tiers?  
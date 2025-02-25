# Azeroth Tour Guide - Project Plan

**Concept**: I’m building a vacation guide website for the Warcraft universe. My goal is to use this project to dive headfirst into Rust, make a full-stack app, and eventually figure out GitHub Actions for CI/CD.

## MVP Features (Bare Essentials)
- **Interactive Map**  
  - STATIC: A static SVG of Azeroth—good ol’ Kalimdor and Eastern Kingdoms.  
  - NEXT: Make regions clickable linking to location details.
  - NEXT: Dynamic map with highlights. 
- **Location Listings**  
  - STATIC: Hardcoded list of spots like Orgrimmar or Stormwind.
  - NEXT: Add descriptions, maybe lore-friendly from the wiki?  
  - NEXT: Include images, maybe screenshots from WoW?  
- **Search Functionality**  
  - STATIC: A search bar that doesn’t do much yet.  
  - NEXT: Filter the location list by search term.  
  - NEXT: Highlight search hits on the dynamic map.

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
   - NSome sort of `Rust` server. Initial research pulls up `Actix` or `Rocket`?
   - SQLite or PGSQL? MySQL? Want a relational, not something like MongoDB  
   - REST API?
6. **Integration**  
   - Fetch API data to replace static content.  
7. **Back End Testing**  
   - Write some `cargo test` unit tests for the API. 
   - Smash frontend and backend together, pray it works.  
8. **Deploy**  
   - Deploy on `Rust`-friendly host. Set up monitoring!  

## Future Features
- **Core Ideas:** Themed trips like “Undead Road Trip” or Dwarven BBQ Tour”. Maybe recs for inns and taverns. Fake booking system?
- **UX:** User logins, custom recs, sharing, maybe local events like Darkmoon Faire dates. 
-  **Cash Flow?**
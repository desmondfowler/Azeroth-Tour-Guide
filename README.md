# Azeroth Tour Guide - Project Plan

**Concept**: A vacation guide-style website set in the Warcraft universe.

## MVP Features
- **Interactive Map**  
  - STATIC: SVG image of Azeroth.  
  - NEXT: Clickable regions linking to location details.  
  - NEXT: Dynamic map with highlights.  
- **Location Listings**  
  - STATIC: Hardcoded HTML list of locations.  
  - NEXT: Add descriptions.  
  - NEXT: Include images.  
- **Search Functionality**  
  - STATIC: Basic search bar.  
  - NEXT: Filter location list by search term.  
  - NEXT: Highlight results on dynamic map.

## Development Steps
1. **Scope MVP**  
   - Interactive map (static), location list, basic search.  
2. **UI Mockup**  
   - Sketch layout (pen/paper or Figma).  
3. **Setup Environment**  
   - Install VS Code, Git; create GitHub repo.  
4. **Front End**  
   - HTML/CSS for static pages; JS for map clicks and search.  
   - Ensure mobile-responsive design.  
5. **Front End Testing**  
   - Test across browsers; gather feedback.  
6. **Back End**  
   - Node.js + Express; MongoDB for location data; basic REST API.  
7. **Integration**  
   - Fetch API data to replace static content.  
8. **Back End Testing**  
   - Unit tests for API; integration tests with front end.  
9. **Deploy**  
   - Host on Heroku/Vercel; launch and monitor.  

## Future Features
- **Core**: Themed itineraries (e.g., "Beach Holidays"), accommodation/dining recs.  
- **UX**: User accounts, personalized recs, social sharing, local events.  
- **Expansion**: Booking simulation, travel blog, multi-language support.  
- **Monetization**: Affiliate links, premium accounts.

## Best Practices
- Frequent Git commits.  
- Clean, commented code.  
- Regular refactoring and updated docs.
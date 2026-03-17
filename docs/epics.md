# epics.md

## Epic 1: App skeleton and data setup

Get the project running locally and deployed with a simple data model.

Includes:

- app scaffold
- database setup
- migrations
- core schema for locations, routes, and zones
- seed/load workflow for content

Done when:

- the app runs locally
- the database schema exists
- seeded content can be loaded repeatably
- production deploy works

## Epic 2: Content model and starter dataset

Define what a good entry looks like and load the first real content.

Includes:

- location content template
- route content template
- zone records
- first batch of curated entries
- validation for obviously bad or incomplete content

Done when:

- there is a usable starter dataset
- entries follow a consistent structure
- routes can reference real locations

## Epic 3: Public browsing

Build the main way people explore the guide.

Includes:

- homepage or catalog landing page
- browseable location list
- summary cards
- filters for type, zone, faction, and expansion
- optional basic (simple) search

Done when:

- users can browse entries easily
- filters work
- the catalog feels coherent with real content

## Epic 4: Detail pages and routes

Build the pages that make the guide actually a guide.

Includes:

- location detail pages
- route pages with ordered stops
- links between locations, zones, and routes
- basic "related content" navigation

Done when:

- every catalog item has its own page
- routes feel curated and readable
- users can mobe naturally between related content

## Epic 5: Zone pages and MVP polish

Round out the guide and make it feel complete enough to ship.

Includes:

- zone pages
- navigation cleanup
- layout polish
- empty states/missing data handling
- small QA pass

Done when:

- zones work as browseable hubs
- navigation is not confusing
- the app feels good enough to share

## Potential future epic 1: easier content editing

Make content maintenance easier.
Includes:

- lightweight admin UI or internal forms
- draft -> publish workflow for pages
- easier editing for locations and routes

## Potential future epic 2: better discovery and community features

Expand beyond the basic curated guide

- maps
- favorites or saved routes
- custom routes
- route completion tracking (checkboxes with cookies?)
- comments/reviews/submissions
- richer recommendations

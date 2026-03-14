# spec.md

## Azeroth Food Tour Guide

A small web app for browsing Warcraft food-related places in Azeroth.

Think:

- inns
- taverns
- food vendors
- cooking-relevant zones
- themed travel routes

This is meant to feel more like a curated fan guide than a giant game database.

## Why make it

WoW has lots of food, inn, tavern, and travel-flavored worldbuilding, but it's scattered across player memory, wikis, and some general-purpose databases (like Wowhead). I want one place that makes this stuff easy and fun to browse.

## Who it's for

Mainly:

- WoW players who like exploration, lore, and roleplay
- people who enjoy themed or "cozy" worldbuilding content

## MVP

The first version should be small and manually curated.

To include:

- a list of food-related locations
- filters by type, zone, faction, and expansion
- basic search
- a detail page for each location
- a few themed route pages with ordered stops
- a zone view showing related entries

Target size:

- 25-40 locations
- 1-3 routes
- 8-12 zones

## Not in MVP but maybe later

- user accounts
- comments, ratings, reviews
- map system
- automatic scraping from wowhead/wikis
- mobile app
- completion tracking
- trying to cover the entirety of warcraft

## Content rules

Each location should answer:

- what is this place?
- why is it food related?
- where is it?
- who is it relevant to?
- what route or theme does it connect to?

If an entry does not feel interesting or thematic, it shouldn't be there. At least not to begin with. Maybe we'll have a "boring" route later.

## Rough data model

### Location

A place in the guide. Contains:

- name
- slug
- type
- short summary
- full description
- zone
- subzone
- expansio
- faction
- food relevance notes
- tags
- coordinates
- related routes

### Route

A themed set of "stops" at locations. Fields:

- title
- slug
- summary
- theme
- description
- ordered stops
- optional faction notes
- optional travel notes

### Zone

Used to browse and group entries. Fields:

- name
- slug
- continent
- expansion

## Tech direction

Stack:

- Next.js
- Postgres
- Prisma?
- Vercel or similar hosting

Monolith, no microservices.

## Content management

Starting point:

- store seed data in structured files
- load into the db
- edit directly as needed

Maybe admin UI later for edits but probably not MVP.

## Scope guardrails

- Start with Eastern Kingdoms only
- keep the first release tightly curated
- prioritize good writeups (quality over quantity and all that)
- do not build maps or community features early (reviews/comments/etc)

## Success

MVP is good enough if:

- browsing is fun and easy
- each page clearly explains why the location matters
- routes are coherent and feel like they're worth following
- adding content is easy

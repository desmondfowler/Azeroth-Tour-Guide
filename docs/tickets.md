# tickets.md

## Conventions

- Estimate: intended to fit within 1-4 hours
- Blocked by: tickets that need to be done first
- Blocks: tickets that depend on this ticket
- MVP status:
  - MVP
  - Later

---

# Ticket template

## TXXX - Short ticket title

- MVP status: MVP
- Estimate: 1–4 hours
- Blocked by: none
- Description:
  - Clear statement of the work to be done
- Acceptance criteria:
  - Observable outcomes
- Blocks:
  - TYYY
  - TZZZ

---

# [Epic 1](/docs/epics.md#epic-1-app-skeleton-and-data-setup): App skeleton and data setup

## T001 - Choose stack and record initial technical decisions

- MVP status: MVP
- Estimate: 1 hour
- Blocked by: none
- Description:
  - Decide the initial implementation stack for the project
  - Record only the decisions needed to unblock setup
- Acceptance criteria:
  - A technical decision doc exists
  - Framework, database, ORM, and hosting target are explicit
  - MVP content-loading approach is explicit
  - Deferred decisions are listed
- Blocks
  - All

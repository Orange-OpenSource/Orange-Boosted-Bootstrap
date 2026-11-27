# ADR-0004: Use external repository for skills

Date: 2026-09-17

## Status

Accepted

## Context and Problem Statement

Our skills are available on our main repository, meaning that any new installs will download the last modified skills which will not necessarily be compatible with the installed OUDS Web version.

## Option

### Keep the skill on main repo

*** Advantages ***
- nothing to do

*** Disadvantages ***
- need to update the skills only in one go on release
- need to add checks so the skill verify what is installed
- need to list all updates in each reference files
- probably token-heavy in the long run

### Export the skills in another repo and version it

*** Advantages ***
- we can update the skills at the same time as our main documentation
- main branch represents the current version for all docs
- the skills can overwrite the old ones on the client side on update
- probably less token used as reference files do not necessarily augment on updates

*** Disadvantages ***
- need to maintain another repo
- need to publish to this repo at each release

## Decision

Use an external repository for skills. It seems easier to maintain and use, the release can be automated in the future.

## Consequences

Create the repo, add steps in release to update the skills.

## Links

See [ouds-web-skills repository](https://github.com/Orange-OpenSource/ouds-web-skills)

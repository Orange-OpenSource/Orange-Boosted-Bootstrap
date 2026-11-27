# ADR-0000: Use ADR

Date: 2026-02-13

## Status

Accepted

## Context and Problem Statement

We want to record architectural decisions made in this project independent whether decisions concern the architecture (“architectural decision record”), the code, or other fields.

## Option

### Do not record anything

*** Advantages ***
- no need to remember to store decision

*** Disadvantages ***
- no records

### Use Loop or wiki or other solution

*** Advantages ***
- can be easy to edit

*** Disadvantages ***
- decision are not colocated with the code
- no obvious way to find the decisions

### Use ADR inside the repository

*** Advantages ***
- decision stored with the code
- adding a decision is a PR
- known format

*** Disadvantages ***
- need to add a PR on each decision

## Decision

Chosen option: “Use ADR inside the repository”, because

- Implicit assumptions should be made explicit. Design documentation is important to enable people understanding the decisions later on.
- Storing the decisions inside the repository is the best future-proof way to do it

## Consequences

We need to create the ADR directory and maintain it

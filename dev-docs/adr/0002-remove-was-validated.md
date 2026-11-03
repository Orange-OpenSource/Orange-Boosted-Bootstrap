# ADR-0002: Remove .was-validated

Date: 2026-02-23

## Status

Accepted

## Context and Problem Statement

We use `.was-validated` and `:invalid` pseudo-class to mark invalid inputs. This was mainly due to the fact that `:invalid` was always set on input display even without any user action, this way developers could add the `.was-validated` toggle to show the invalid states only when needed.
This is cumbersome and make us add a lot of code in the CSS, while most developers using client-side framework are using `.is-invalid`.
Recently the `:user-invalid` pseudo-class become baseline, it is the same as `:invalid` but is activated by the browser only after users interact with the input.

## Option

### Keep `.was-validated`

*** Advantages ***
- nothing to do

*** Disadvantages ***
- we keep complicated code
- we must maintain and add this code for any future input component

### Use `:user-invalid` and remove `.was-validated`

*** Advantages ***
- source code is straightforward (colocated with `.is-invalid`)
- end-user experience is improved
- we use standards

*** Disadvantages ***
- we must remove `.was-validated`
- breaking change from Boosted/Bootstrap

## Decision

Remove `.was-validated` and `:invalid` in favor or `:user-invalid`, because:

- it is the future-proof solution
- it is simpler from a code point of view

## Links

Work was done in this PR https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/3386

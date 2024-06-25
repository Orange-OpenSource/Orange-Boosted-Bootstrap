---
layout: docs
title: Migrating from Boosted
description: Track and review changes to the UDS Web source files, documentation, and components to help you migrate from Boosted to UDS Web.
group: migration
aliases:
  - "/migration-from-boosted/"
  - "/docs/migration-from-boosted/"
---

# Migrating from Boosted

<!-- TODO: write the content correctly -->
<!-- TODO: make "From Boosted" a specific page? -->

* New `$enable-bootstrap-specificities` option set to `true` by default.
  * Must be a global migration note as it will impact not only the opacity utilities
* New opacity utilities: `.opacity-transparent`, etc.
* Dropped opacity utilities: `.opacity-0`, etc.
  * Mapping rule between old and new opacity utilities.
* New Sass variables, Sass maps, etc.

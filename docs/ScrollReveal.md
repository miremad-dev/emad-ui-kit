# ScrollReveal

## Description

Reveal elements with smooth animations when they enter the viewport.

## Basic Usage

```javascript
import { ScrollReveal } from "emad-ui-kit";

new ScrollReveal(".section");
```

## Configuration Options

The following options are planned for the first release:

- `origin`
- `distance`
- `duration`
- `delay`
- `threshold`
- `once`

---

## Internal Architecture

ScrollReveal lifecycle:

```text
constructor
    ↓
init
    ↓
validate
    ↓
mergeOptions
    ↓
collectElements
    ↓
applyInitialStyles
    ↓
createObserver
    ↓
handleIntersect
    ↓
reveal
    ↓
destroy
```

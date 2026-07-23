# ScrollReveal

## Description

ScrollReveal reveals elements with smooth animations when they enter the viewport.

---

## Installation

```bash
npm install emad-ui-kit
```

---

## Basic Usage

```javascript
import { ScrollReveal } from "emad-ui-kit";

new ScrollReveal(".section");
```

---

## Configuration Options

| Option    | Type    | Default    | Description                        |
| --------- | ------- | ---------- | ---------------------------------- |
| origin    | string  | `"bottom"` | Animation starting direction       |
| distance  | string  | `"50px"`   | Initial movement distance          |
| duration  | number  | `600`      | Animation duration in milliseconds |
| delay     | number  | `0`        | Delay before animation starts      |
| threshold | number  | `0.2`      | IntersectionObserver threshold     |
| once      | boolean | `true`     | Reveal only once                   |

---

## Examples

### Reveal from bottom

```javascript
new ScrollReveal(".section");
```

### Reveal from left

```javascript
new ScrollReveal(".card", {
  origin: "left",
  distance: "100px",
});
```

### Reveal from right

```javascript
new ScrollReveal(".card", {
  origin: "right",
});
```

### Reveal from top

```javascript
new ScrollReveal(".title", {
  origin: "top",
});
```

---

## Public API

### Constructor

```javascript
new ScrollReveal(selector, options);
```

### Methods

#### destroy()

```javascript
const reveal = new ScrollReveal(".section");

reveal.destroy();
```

Stops observing elements and releases resources.

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari (with IntersectionObserver support)

---

## Notes

- Elements must exist in the DOM before creating a `ScrollReveal` instance.
- Uses the native `IntersectionObserver` API.

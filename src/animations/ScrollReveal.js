import { defaultOptions } from "./defaults.js";

export default class ScrollReveal {
  // Initialize ScrollReveal instance with user configuration
  constructor(selector, options = {}) {
    this.selector = selector;
    this.options = options;

    this.elements = [];
    this.observer = null;

    this.init();
  }

  // Start ScrollReveal initialization process
  init() {
    this.validate();
    this.mergeOptions();
    this.collectElements();
    this.applyInitialStyles();
  }

  // Validate user inputs and configuration options
  validate() {
    if (!this.selector) {
      throw new Error("ScrollReveal requires a selector");
    }

    if (typeof this.selector !== "string") {
      throw new Error("ScrollReveal selector must be a string");
    }

    if (typeof this.options !== "object" || this.options === null) {
      throw new Error("ScrollReveal options must be an object");
    }
  }

  // Merge default settings with user-provided options
  mergeOptions() {
    this.options = {
      ...defaultOptions,
      ...this.options,
    };
  }

  // Collect target elements from the DOM using the provided selector
  collectElements() {
    const elements = document.querySelectorAll(this.selector);

    this.elements = [...elements];

    if (this.elements.length === 0) {
      console.warn(
        `ScrollReveal: No elements found for selector ${this.selector}`,
      );
    }
  }

  // Calculate initial transform position before reveal animation
  getInitialTransform() {
    const { origin, distance } = this.options;

    switch (origin) {
      case "top":
        return `translateY(-${distance})`;

      case "bottom":
        return `translateY(${distance})`;

      case "left":
        return `translateX(-${distance})`;

      case "right":
        return `translateX(${distance})`;

      default:
        return "translateY(0)";
    }
  }

  // Apply initial animation state before elements are revealed
  applyInitialStyles() {
    const transform = this.getInitialTransform();

    this.elements.forEach((element) => {
      element.style.opacity = "0";

      element.style.transform = transform;
    });
  }

  // Create IntersectionObserver to detect viewport visibility changes
  createObserver() {}

  // Handle intersection changes and trigger reveal animations
  handleIntersect() {}

  // Reveal target element by applying final animation state
  reveal() {}

  // Clean up observer and release resources
  destroy() {}
}

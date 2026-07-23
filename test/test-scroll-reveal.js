import ScrollReveal from "../src/animations/ScrollReveal.js";

// Test 1: Valid selector
const reveal = new ScrollReveal(".section");

console.log(reveal);

// Test 2: Missing selector
// Invalid test
try {
  new ScrollReveal();
} catch (error) {
  console.log("Validation error:");
  console.log(error.message);
}

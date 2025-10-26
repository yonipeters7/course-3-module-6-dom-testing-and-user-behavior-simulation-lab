// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("user-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("user-input").value.trim();

    if (!input) {
      showError("Please enter text before submitting!");
    } else {
      hideError();
      addElement(input);
      document.getElementById("user-input").value = "";
    }
  });

  // Simulate click event
  document.getElementById("simulate-click").addEventListener("click", () => {
    addElement("Simulated click added this!");
  });
});

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.
function createElement(tag, attributes = {}, text = "") {
  const element = document.createElement(tag);
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  if (text) element.textContent = text;
  return element;
}

// Add element to DOM
function addElement(content) {
  const container = document.getElementById("dynamic-content");
  const newEl = createElement("p", {}, content);
  container.appendChild(newEl);
}

// Remove element from DOM
function removeElement() {
  const container = document.getElementById("dynamic-content");
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
}

// Update DOM
function updateElement(newText) {
  const container = document.getElementById("dynamic-content");
  if (container.firstChild) {
    container.firstChild.textContent = newText;
  }
}

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.
// Display error message
function showError(message) {
  const errorDiv = document.getElementById("error-message");
  errorDiv.textContent = message;
  errorDiv.classList.remove("hidden");
}

// Hide error message
function hideError() {
  document.getElementById("error-message").classList.add("hidden");
}

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
module.exports = {
  createElement,
  addElementToDOM: addElement,
  removeElementFromDOM: removeElement,
  updateElementInDOM: updateElement,
  showError,
  hideError,
};
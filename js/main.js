"use strict";

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const fields = [
  { input: document.querySelector("#full-name"), error: document.querySelector("#name-error"), label: "Full name" },
  { input: document.querySelector("#email"), error: document.querySelector("#email-error"), label: "Email address" },
  { input: document.querySelector("#subject"), error: document.querySelector("#subject-error"), label: "Subject" },
  { input: document.querySelector("#message"), error: document.querySelector("#message-error"), label: "Message" }
];

function clearFieldError(field) {
  field.error.textContent = "";
  field.input.removeAttribute("aria-invalid");
}

function validateField(field) {
  const value = field.input.value.trim();
  let error = "";
  if (!value) {
    error = `${field.label} is required.`;
  } else if (field.input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    error = "Enter a valid email address, such as name@example.com.";
  }
  field.error.textContent = error;
  if (error) {
    field.input.setAttribute("aria-invalid", "true");
  } else {
    field.input.removeAttribute("aria-invalid");
  }
  return !error;
}

fields.forEach((field) => {
  field.input.addEventListener("input", () => {
    clearFieldError(field);
    formStatus.textContent = "";
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "";
  let firstInvalid = null;
  fields.forEach((field) => {
    if (!validateField(field) && !firstInvalid) {
      firstInvalid = field.input;
    }
  });
  if (firstInvalid) {
    firstInvalid.focus();
  } else {
    formStatus.textContent = "Validation succeeded! This is a demo, so your message was not sent.";
  }
});

const githubForm = document.querySelector("#github-form");
const githubUsername = document.querySelector("#github-username");
const githubStatus = document.querySelector("#github-status");
const githubProfile = document.querySelector("#github-profile");
let latestRequest = 0;

githubForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = githubUsername.value.trim();
  const request = ++latestRequest;
  githubProfile.hidden = true;
  githubStatus.classList.remove("is-error");

  if (!/^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(username)) {
    githubStatus.classList.add("is-error");
    githubStatus.textContent = "Enter a valid GitHub username (1–39 letters, numbers, or hyphens).";
    return;
  }

  githubStatus.textContent = "Loading profile…";
  try {
    const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);
    if (!response.ok) {
      throw new Error(response.status === 404
        ? "That GitHub user was not found. Check the username and try again."
        : "Could not load the profile. Please try again later.");
    }
    const user = await response.json();
    if (request !== latestRequest) return;

    // Construct links from the validated username instead of trusting URLs in API data.
    const image = document.querySelector("#profile-image");
    image.src = `https://github.com/${encodeURIComponent(username)}.png?size=144`;
    image.alt = `GitHub avatar for ${username}`;
    document.querySelector("#profile-name").textContent = user.name ? `${user.name} (@${username})` : `@${username}`;
    document.querySelector("#profile-bio").textContent = user.bio || "No biography provided.";
    document.querySelector("#profile-link").href = `https://github.com/${encodeURIComponent(username)}`;
    githubProfile.hidden = false;
    githubStatus.textContent = "Profile loaded.";
  } catch (error) {
    if (request !== latestRequest) return;
    githubStatus.classList.add("is-error");
    githubStatus.textContent = error instanceof Error && error.message.startsWith("That GitHub user")
      ? error.message
      : "Could not load the profile. Check your connection or try again later.";
  }
});

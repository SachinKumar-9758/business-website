document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const reasonSelect = document.getElementById("reason");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const reasonError = document.getElementById("reason-error");
  const messageError = document.getElementById("message-error");
  const statusEl = document.getElementById("form-status");

  function showError(el, errorEl, message) {
    if (!el || !errorEl) return;
    el.setAttribute("aria-invalid", "true");
    errorEl.textContent = message;
  }

  function clearError(el, errorEl) {
    if (!el || !errorEl) return;
    el.removeAttribute("aria-invalid");
    errorEl.textContent = "";
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  form.addEventListener("submit", (event) => {
    let isValid = true;
    if (statusEl) statusEl.textContent = "";

    if (nameInput && nameError) {
      if (!nameInput.value.trim()) {
        showError(nameInput, nameError, "Please enter your name.");
        isValid = false;
      } else {
        clearError(nameInput, nameError);
      }
    }

    if (emailInput && emailError) {
      if (!emailInput.value.trim()) {
        showError(emailInput, emailError, "Please enter your email address.");
        isValid = false;
      } else if (!validateEmail(emailInput.value.trim())) {
        showError(emailInput, emailError, "Please enter a valid email address.");
        isValid = false;
      } else {
        clearError(emailInput, emailError);
      }
    }

    if (reasonSelect && reasonError) {
      if (!reasonSelect.value) {
        showError(reasonSelect, reasonError, "Please choose a reason.");
        isValid = false;
      } else {
        clearError(reasonSelect, reasonError);
      }
    }

    if (messageInput && messageError) {
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        showError(messageInput, messageError, "Please add a short message (at least 10 characters).");
        isValid = false;
      } else {
        clearError(messageInput, messageError);
      }
    }

    if (!isValid) {
      event.preventDefault();
      if (statusEl) {
        statusEl.textContent = "Please fix the highlighted fields and try again.";
      }
      return;
    }

    event.preventDefault();
    form.reset();
    if (statusEl) {
      statusEl.textContent = "Thank you! Your message has been sent (demo).";
    }
  });
});

const emailInput = document.querySelector(".input-wrapper input");
const btnGetStarted = document.querySelector(".form button");
const form = document.querySelector(".form");
const popup = document.querySelector(".popup");

const validateEmail = function (email) {
  if (email.indexOf("@") === -1 || typeof email !== "string") return false;

  const [localPart, domain] = email.split("@");

  if (localPart.length === 0 || domain.length === 0) {
    return false;
  }
  console.log(localPart, domain);

  const domainExtension = domain.split(".");
  console.log(domainExtension);

  if (
    domainExtension.length < 2 ||
    domainExtension[domainExtension.length - 1] < 2
  ) {
    return false;
  }

  return true;
};

// validateEmail("dubemmbah@gmail.com");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("error");
    console.log("error class");
  }

  if (validateEmail(emailInput.value)) {
    emailInput.classList.remove("error");

    // Clear email input field
    emailInput.value = "";

    // Remove focus
    emailInput.blur();

    // Remove .show class from thankyou message
    popup.classList.remove("show");

    // Trigger reflow i.e., force browser to recalculate position and place in initial position
    void popup.offsetWidth;

    // Add .show class
    popup.classList.add("show");
  }
});

// emailInput.addEventListener("input", validateEmail);
